import { useState } from "react"
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function SignUpPage({ setUser }) {
    const [signup, setSignUp] = useState(true)

    return(
        <main>
            <h1 onClick={() => setSignUp(signup)}>Sign-Up</h1>
            <SignUpForm setUser={setUser}/>
        </main>
    )
}