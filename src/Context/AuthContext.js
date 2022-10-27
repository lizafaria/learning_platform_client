import { createContext, useEffect, useState } from "react";
import app from "../components/Firebase/Firebase.init";
import { getAuth,createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
 
export const AuthContext=createContext()
const auth=getAuth(app);
const AuthConextProvider=({children})=>{
    const googleProvider=new GoogleAuthProvider()
    const githubProvider=new GithubAuthProvider()
    const [user,setUser]=useState({})
    const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateProfileDetails=(profile)=>{
        return updateProfileDetails(auth.currentUser,profile);
    }
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const verifyEmail=()=>{
        return sendEmailVerification(auth.currentUser);
    }
    const signInGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    const signInGithub=()=>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider)
    }
    const logOut=()=>{
        setLoading(true);
        return logOut(auth)
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return()=>{
            unSubscribe()
        }
    },[])

    const authInfo={
        user,loading,createUser,updateProfileDetails,verifyEmail,signInGoogle,signInGithub,signIn,logOut,
    }
    return(
        <div>
            <AuthContext.Provider>{children}</AuthContext.Provider>
        </div>
    );
};
export default AuthConextProvider;