import { createContext, useContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail
 } from 'firebase/auth'
import { auth } from "../services/firebase";


export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Login with email and password
    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    const login = async (email, password) => {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => signOut(auth)

    // Login with Google
    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    // Reset password
    const resetPassword = (email) => sendPasswordResetEmail(auth,email)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // currentUser: objectUser | null
            setUser(currentUser)
            setLoading(false)
        })
        
        return () => unsubscribe()
    }, []);

    return (
        <AuthContext.Provider value={{ signup, login, logout, user, loading, loginWithGoogle, resetPassword }}>
            {children}
        </AuthContext.Provider>
    )
}


// Hook personalizado para no importar
// useContext en todos los componentes
export const useAuth = () => {
    const context = useContext(AuthContext) 
    if(!context) throw new Error('There is not quth provider')
    return context
}
