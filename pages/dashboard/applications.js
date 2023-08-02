import { useSession, signIn, signOut } from "next-auth/react";

export function Applications() {
    const { data: session } = useSession()
    if (session) {
        return(
            <div>
                <h1>Protected</h1>
                <p>Welcome, {session.user.name}</p>
                <button onClick={()=> signOut()}>Sign Out</button>
            </div>
        )
    } 
    return (
        <div>
            <h1>Not Protected</h1>
            <p>This is not protected</p>
            <button onClick={()=> signIn()}>Sign In</button>
        </div>
    )
}