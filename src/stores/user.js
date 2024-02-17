import { defineStore } from 'pinia'
import { auth, db } from '@/includes/firebase'
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false
  }),
  actions: {
    async register(values) {
      const userCred = await createUserWithEmailAndPassword(auth, values.email, values.password)

      const newDocument = doc(db, 'users', userCred.user.uid)

      await setDoc(newDocument, {
        name: values.name,
        email: values.email
      })

      await updateProfile(userCred.user, {
        displayName: values.name
      })

      this.userLoggedIn = true
    },
    async authenticate(values) {
      await signInWithEmailAndPassword(auth, values.email, values.password)

      this.userLoggedIn = true
    },
    async signOut() {
      await signOut(auth)

      this.userLoggedIn = false
    }
  }
})
