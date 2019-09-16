import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
  apiKey: 'AIzaSyDsy5hGZROQYIKXgJdMENbQypMlzEqLNXw',
  authDomain: 'instafake-aac4c.firebaseapp.com',
  databaseURL: 'https://instafake-aac4c.firebaseio.com',
  projectId: 'instafake-aac4c',
  storageBucket: '',
  messagingSenderId: '1060192762161'
}

class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
    this.db = app.firestore()
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
              name: null,
              following: [],
              images: []
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
   * Get data function
   * @returns {string} The user.
   */

  // getData() {
  //   this.db
  //     .collection('prueba')
  //     .get()
  //     .then(querySnapshot => {
  //       querySnapshot.forEach(doc => {
  //         console.log(doc.data())
  //         console.log(`${doc.id} => ${doc.data()}`)
  //       })
  //     })
  // }
}

export default new Firebase()
