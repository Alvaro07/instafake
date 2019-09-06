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

  login(email, password) {
    return new Promise((resolve, reject) => {
      this.auth
        .signInWithEmailAndPassword(email, password)
        .then(() => resolve())
        .catch(error => reject(error))
    })
  }

  register(email, password) {
    return new Promise((resolve, reject) => {
      this.auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => resolve())
        .catch(error => reject(error))
    })
  }

  logout() {
    return this.auth.signOut()
  }

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
}

export default new Firebase()
