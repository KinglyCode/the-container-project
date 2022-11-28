import { useState } from "react"
import LoginForm from "../../components/LogInForm/LogInForm";

export default function LogInPage({ setUser }) {
    const [login, setLogin] = useState(true)
    
    return(
        <main>
            <h1 onClick={() => setLogin(login)}>Login</h1>
            <LoginForm setUser={setUser} />
        </main>
    )
}