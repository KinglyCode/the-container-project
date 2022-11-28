import { Link } from "react-router-dom"

export default function IndexPage(){
    return(
        <>
        <h1>Main Page</h1>
        <h3>Please login or SignUp to start shopping!</h3>
        <Link to="/login-form">Login</Link>
        <Link to="/signup-form">Sign-Up</Link>
        </>
    )
}