import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "./../utilities/auth/firebase/firebase.config";
import SignUp from "./../Components/Pages/SignUp/SignUp";

// make context
export const AuthContext = createContext("");
//google provider
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    //create user

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // log in user

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    //sign up or log in with google

    const googleSignin = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    // set current user data

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unSubscribe();
    }, []);

    //creat a object

    const authinfo = { user, createUser, googleSignin, login, loading };
    return <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
