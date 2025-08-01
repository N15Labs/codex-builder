import { useFirebaseAuth, useCurrentUser } from 'vuefire'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth'

export function useAuth() {
  const auth = useFirebaseAuth()
  const currentUser = useCurrentUser()

  const login = (email: string, password: string) =>
    signInWithEmailAndPassword(auth!, email, password)

  const register = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth!, email, password)

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    return await signInWithPopup(auth!, provider)
  }

  const logout = () => signOut(auth!)

  return {
    currentUser,
    login,
    register,
    loginWithGoogle,
    logout
  }
}
