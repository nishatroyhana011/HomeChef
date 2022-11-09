import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebaseConfig/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const providerGoogleLogin = (provider)=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const userUpdate = (Name, photo) => {
        setLoading(true)
        updateProfile(auth.currentUser, {
            displayName: Name,
            photoURL:photo
        }).then((res) => {
           
        }).catch((error) => {
            
        });
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        });
        return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        createUser,
        loginUser,
        providerGoogleLogin,
        user,
        logOut,
        userUpdate
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;