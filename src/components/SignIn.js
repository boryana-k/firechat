import React from 'react'
import firebase from 'firebase/compat/app'
import { auth } from '../firebase.js'
import { Button } from '@mui/material'
import { signInAnonymously } from 'firebase/auth'

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    const logAsGuest = () => {
        signInAnonymously(auth)
    }
    
    return (
        <>
          <Button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</Button>
          <Button className="sign-in" onClick={logAsGuest}>Continue as a Guest</Button>
        </>
    )
}

export default SignIn