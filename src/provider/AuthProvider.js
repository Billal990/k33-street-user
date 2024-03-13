import { app } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

import { createContext, useEffect, useState } from "react"
export const AuthContext = createContext()

const auth = getAuth(app);

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signupWithEmailAndPassword = (email, password)=>createUserWithEmailAndPassword(auth, email, password)
    const sendMailVerification = ()=>sendEmailVerification(auth.currentUser);
    const loginWithEmailAndPassword = (email, password)=>signInWithEmailAndPassword(auth, email, password)
    const sendResetPasswordEmail = (email)=>sendPasswordResetEmail(auth, email)
    const logoutUser = ()=>signOut(auth)
    const updateUserProfile = (displayName, photoURL)=>updateProfile(auth.currentUser, {displayName, photoURL})

    const authInfo = {
      user,
      loading,
      signupWithEmailAndPassword,
      sendMailVerification,
      loginWithEmailAndPassword,
      sendResetPasswordEmail,
      logoutUser,
      updateUserProfile
  }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user)=>{
        setUser(user)
        setLoading(false)
      })
      return ()=>unsubscribe()
    }, [user])


  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
