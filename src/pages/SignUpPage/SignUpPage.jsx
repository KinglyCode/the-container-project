import { useState } from "react"
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function SignUpPage({ setUser }) {
    const [signup, setSignUp] = useState(true)

    return(
        <div>
            <h1 onClick={() => setSignUp(signup)}></h1>
            <SignUpForm setUser={setUser}/>
        </div>
    )
}