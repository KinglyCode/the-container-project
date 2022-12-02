import { Link } from "react-router-dom"
import "./IndexPage.css"

export default function IndexPage(){
    return(
        <>
        <div className="main-page">
            <h1>Main Page</h1>
            <h3>Please login or SignUp to start shopping!</h3>
            <button class="button-81" role="button"><Link className="login" to="/login-form">Login</Link></button>
            <button className="button-81" role="button"><Link className="sign-up-form" to="/signup-form">Sign Up</Link></button>
        </div>
        </>
    )
}