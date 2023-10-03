import React, { createContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import auth from '../Firebase/firebase.config';

export const MyContext = createContext(null);

const ContextAuth = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const subscribed = onAuthStateChanged(auth, (currentUser) => {
            setIsLoading(false)
            setUser(currentUser);
        })
    }, [])



    const contextElement = {
        user,
        createUser,
        signIn,
        googleSignIn,
        isLoading,
    }

    return (
        <MyContext.Provider value={contextElement}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextAuth