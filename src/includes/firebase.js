import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { collection, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD0x6e3XN69oy1rHH8HvZl4pLhgSZ969yE',
  authDomain: 'podcastin-fed64.firebaseapp.com',
  projectId: 'podcastin-fed64',
  storageBucket: 'podcastin-fed64.appspot.com',
  appId: '1:370043596722:web:90b5e68799f08a6f487eab'
}

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

const usersCollection = collection(db, 'users')

export { auth, usersCollection, db }
