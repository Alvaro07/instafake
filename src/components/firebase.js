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

  // login(email, password) {
  //   return this.auth.signInWithEmailAndPassword(email, password)
  // }

  // logout() {
  //   return this.auth.signOut()
  // }

  // async register(name, email, password) {
  //   await this.auth.createUserWithEmailAndPassword(email, password)
  //   return this.auth.currentUser.updateProfile({
  //     displayName: name
  //   })
  // }
}

export default new Firebase()
