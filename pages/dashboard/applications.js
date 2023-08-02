import { useSession, signIn, signOut } from "next-auth/react";

export default function Applications() {

    return (
        <div>
            <h1>Not Protected</h1>
            <p>This is not protected</p>
            <button onClick={()=> signIn()}>Sign In</button>
        </div>
    )
}