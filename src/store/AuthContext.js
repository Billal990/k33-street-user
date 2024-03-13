import { useContext, useState, useEffect, createContext } from "react"
import { app } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword,sendPasswordResetEmail,signOut, createUserWithEmailAndPassword, updateProfile, getAuth, sendEmailVerification } from "firebase/auth";

const auth = getAuth(app);

const AuthContext = createContext()

export const useAuth=()=>{
  return useContext(AuthContext)
}

export const AuthContextProvider = ({ children })=>{
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true);
 

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return signOut(auth)
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }


  function profileUpdate(displayName, photoURL){
    return updateProfile(auth.currentUser, {displayName, photoURL})
  }

  function sendVerificationEmail(){
    return sendEmailVerification(auth.currentUser)
  }


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async(user) => {
      setCurrentUser(user)
      setLoading(false)
    })
    // console.log(unsubscribe);

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signUp,
    login,
    logout,
    resetPassword,
    profileUpdate,
    sendVerificationEmail
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}