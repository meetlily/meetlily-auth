import { signIn, signOut } from "next-auth/react";
import { useState } from 'react';

export  default function Terms() {
    return (
        <div>
            <h1>Not Protected</h1>
            <p>This is not protected</p>
            <button onClick={()=> signIn()}>Sign In</button>
        </div>
    )
}