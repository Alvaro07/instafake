import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/firebase-storage'
import { generateHash } from '../utils/generateHash'

const config = {
  apiKey: 'AIzaSyDsy5hGZROQYIKXgJdMENbQypMlzEqLNXw',
  authDomain: 'instafake-aac4c.firebaseapp.com',
  databaseURL: 'https://instafake-aac4c.firebaseio.com',
  projectId: 'instafake-aac4c',
  storageBucket: 'instafake-aac4c.appspot.com',
  messagingSenderId: '1060192762161'
}

class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
    this.db = app.firestore()
    this.storage = app.storage()
  }

  /**
   *
   * Login function
   * @param {string} email - The user email.
   * @param {string} password - The user password.
   */

  login(email, password) {
    return new Promise((resolve, reject) => {
      this.auth
        .signInWithEmailAndPassword(email, password)
        .then(() => resolve())
        .catch(error => reject(error))
    })
  }

  /**
   *
   * Check that user exists
   * @param {string} userName - The user name.
   */

  userExists(userName) {
    return new Promise(resolve => {
      this.db
        .collection('users')
        .doc(userName)
        .get()
        .then(doc => resolve(doc))
    })
  }

  /**
   *
   * Register function
   * @param {string} email - The user email.
   * @param {string} password - The user password.
   * @param {string} userName - The user name.
   */

  register(email, password, userName) {
    return new Promise((resolve, reject) => {
      this.auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.db
            .collection('users')
            .doc(userName)
            .set({
              displayName: userName,
              email: email,
              photos: [],
              following: []
            })
            .then(() => {
              this.auth.currentUser.updateProfile({ displayName: userName }).then(() => resolve())
            })
            .catch(error => error)
        })
        .catch(error => reject(error))
    })
  }

  /**
   *
   * Logout function
   */

  logout() {
    return this.auth.signOut()
  }

  /**
   *
   * Get user function
   * @returns {string} The user.
   */

  getUser() {
    return new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged(function(user) {
        if (user) {
          resolve(user)
        } else {
          reject('No user is signed in.')
        }
      })
    })
  }

  /**
   *
   * Function to upload a photo.
   * @param {file} file - The image file.
   * @param {string} description - The photo description.
   * @param {string} user - The user email.
   */

  uploadPhoto(file, description, userName) {
    const ref = this.storage.ref(`images/${userName}/${generateHash()}${file.name}`)
    const task = ref.put(file)

    return new Promise((resolve, reject) => {
      task.on(
        'state_changed',
        snapshot => {},
        error => {
          reject(error.message)
        },
        () => {
          task.snapshot.ref.getDownloadURL().then(downloadURL => {
            const date = new Date()
            const timestamp = date.getTime()

            const record = {
              name: task.snapshot.ref.name,
              user: userName,
              description: description,
              url: downloadURL,
              path: task.snapshot.ref.fullPath,
              timestamp: timestamp,
              likes: [],
              comments: []
            }

            this.getData('users', userName)
              .then(data => {
                this.db
                  .collection('users')
                  .doc(userName)
                  .set({ photos: [...data.photos, record] }, { merge: true })
                resolve()
              })
              .catch(error => reject(error))
          })
        }
      )
    })
  }

  /**
   *
   * Get data function
   * @param {string} collection - The collection you want to search.
   * @param {string} doc - the document to access.
   * @returns {object} The data you have searched.
   */

  getData(collection, doc) {
    return new Promise((resolve, reject) => {
      const docRef = this.db.collection(collection).doc(doc)
      docRef
        .get()
        .then(doc => (doc.exists ? resolve(doc.data()) : reject('No such document!')))
        .catch(error => reject(error))
    })
  }

  /**
   *
   * Get Feed wall function
   * @param {string} userName - The user name.
   */

  async getFeedPictures(userName) {
    let pictures = []

    const followers = await this.db
      .collection('users')
      .doc(userName)
      .get()
      .then(doc => {
        pictures = doc.data().photos
        return doc.data().following
      })

    for (const followUser of followers) {
      const photos = await this.getData('users', followUser).then(data => {
        return data.photos
      })
      pictures = [...pictures, ...photos]
    }

    pictures = pictures.sort((a, b) => a.timestamp - b.timestamp).reverse()
    return pictures
  }

  /**
   *
   * Like photo function
   * @param {string} userName - The user name.
   */

  async likePhoto(userName, timestamp, userLike) {
    let pictures = []
    await this.db
      .collection('users')
      .doc(userName)
      .get()
      .then(querySnapshot => {
        pictures = querySnapshot.data().photos
        pictures.forEach((data, i) => {
          if (data.timestamp === timestamp) {
            pictures[i].likes.includes(userLike)
              ? (pictures[i].likes = pictures[i].likes.filter(e => e !== userLike))
              : pictures[i].likes.push(userLike)
          }
        })
      })

    await this.db
      .collection('users')
      .doc(userName)
      .update({ photos: pictures })
  }

  /**
   *
   * Delete photo form user
   * @param {string} userName - The user name.
   */

  async deletePhoto(userName, photoPath, fileName) {
    let pictures = []
    await this.db
      .collection('users')
      .doc(userName)
      .get()
      .then(querySnapshot => {
        pictures = querySnapshot.data().photos
        pictures = pictures.filter(e => e.path !== photoPath)
      })

    const ref = this.storage.ref(`images/${userName}/${fileName}`)
    await ref.delete()

    await this.db
      .collection('users')
      .doc(userName)
      .update({ photos: pictures })
  }
}

export default new Firebase()
