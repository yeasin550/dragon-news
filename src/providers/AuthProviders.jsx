/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    console.log(user)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const logOut = () => {
       return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
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
    }

    return <AuthContext value={userData}>
        {children}
    </AuthContext>
}
export default AuthProviders;