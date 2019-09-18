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
   * Login function
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
   * Register function
   * @param {string} email - The user email.
   * @param {string} password - The user password.
   */

  register(email, password) {
    return new Promise((resolve, reject) => {
      this.auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.db
            .collection('users')
            .doc(email)
            .set({
              email: email,
              photos: [],
              following: []
            })
            .then(() => resolve())
        })
        .catch(error => reject(error))
    })
  }

  /**
   * Logout function
   */

  logout() {
    return this.auth.signOut()
  }

  /**
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
   * Function to upload a photo.
   * @param {file} file - The image file.
   * @param {string} description - The photo description.
   * @param {string} user - The user email.
   */

  uploadPhoto(file, description, user) {
    const ref = this.storage.ref(`images/${user}/${generateHash()}${file.name}`)
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
              user: user,
              description: description,
              url: downloadURL,
              path: task.snapshot.ref.fullPath,
              timestamp: timestamp,
              likes: [],
              comments: []
            }

            this.getData('users', user)
              .then(data => {
                this.db
                  .collection('users')
                  .doc(user)
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
   * Get Feed wall function
   */

  async getFeedPictures(email) {
    let pictures = []

    const followers = await this.db
      .collection('users')
      .where('email', '==', email)
      .get()
      .then(querySnapshot => {
        let result
        querySnapshot.forEach(doc => {
          pictures = doc.data().photos
          result = doc.data().following
        })
        return result
      })

    for (const user of followers) {
      const photos = await this.getData('users', user).then(data => {
        return data.photos
      })
      pictures = [...pictures, ...photos]
    }

    pictures = pictures.sort((a, b) => a.timestamp - b.timestamp).reverse()
    return pictures
  }
}

export default new Firebase()
