/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // console.log(user)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const logOut = () => {
       return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unsubscribe()
        }
    }, [])




    const userData = {
        user, setUser,
        createUser,
        loginUser,
        logOut,
        loading,
        setLoading,
    }

    return <AuthContext value={userData}>
        {children}
    </AuthContext>
}
export default AuthProviders;