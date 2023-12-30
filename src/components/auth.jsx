import { useState } from 'react';
import { auth, googleProvider } from '../config/firebase.js'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

export const Auth = () => {

    console.log(firebaseui)
    // const [email, setEmail] = useState()
    // const [password, setPassword] = useState()

    // console.log(auth?.currentUser?.email)

    // const signIn = async () => {
    //     try {
    //         await createUserWithEmailAndPassword(auth, email, password)
    //     } catch (err){
    //         console.error(err)
    //     }
    // };

    // const signInWithGoogle = async () => {
    //     try {
    //         await signInWithPopup(auth, googleProvider)
    //     } catch (err){
    //         console.error(err)
    //     }
    // };

    // const logOut = async () => {
    //     try {
    //         await signOut(auth)
    //     } catch (err){
    //         console.error(err)
    //     }
    // };

    return (
        <>
            <h1>Welcome</h1>
            {/* <div>
                <input placeholder="Email..." onChange={(e) => setEmail(e.target.value)}/>
                <input
                    type="password" 
                    placeholder="Password..." 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={signIn}> Sign In</button>
                <button onClick={signInWithGoogle}>Sign In with Google</button>
                <button onClick={logOut}>Logout</button>
            </div> */}
        </>
        
    )
};