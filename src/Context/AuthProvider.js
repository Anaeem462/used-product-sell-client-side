import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "./../utilities/auth/firebase/firebase.config";
import SignUp from "./../Components/Pages/SignUp/SignUp";

// make context
export const AuthContext = createContext("");
//google

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("");
    //create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const googleSignin = () => {
        return;
    };
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth.currentUser, (user) => {
            setUser(user);
        });
        return () => unSubscribe();
    }, []);
    const authinfo = { user, createUser };
    return <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
