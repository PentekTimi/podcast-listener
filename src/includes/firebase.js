import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {
  collection,
  getFirestore,
  initializeFirestore,
  persistentLocalCache
} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyD0x6e3XN69oy1rHH8HvZl4pLhgSZ969yE',
  authDomain: 'podcastin-fed64.firebaseapp.com',
  projectId: 'podcastin-fed64',
  storageBucket: 'podcastin-fed64.appspot.com',
  appId: '1:370043596722:web:90b5e68799f08a6f487eab'
}

const firebaseApp = initializeApp(firebaseConfig)
initializeFirestore(firebaseApp, { localCache: persistentLocalCache({}) })

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

const usersCollection = collection(db, 'users')
const podcastsCollection = collection(db, 'podcasts')
const commentsCollection = collection(db, 'comments')

export { auth, usersCollection, db, storage, podcastsCollection, commentsCollection }
