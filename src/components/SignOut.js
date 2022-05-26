import React from 'react'
import { auth } from '../firebase.js'
import { Button } from '@mui/material'

function SignOut() {
    
    return auth.currentUser && (
            <Button className="sign-out" onClick={() => auth.signOut()}>Sign Out</Button>
    )
}

export default SignOut