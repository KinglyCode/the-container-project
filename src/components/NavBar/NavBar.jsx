import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import "./NavBar.css"

export default function NavBar({ user, setUser}) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <>
            <h3 className='user-name'>Welcome, {user.name}</h3>
                <nav className="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" id="mySidebar">
                <div className="w3-container w3-display-container w3-padding-16">
                <i onClick="w3_close()" className="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
                </div>
                <div className="w3-padding-64 w3-large w3-text-grey" id="myFont">
                    <h3 className="w3-wide"><b>The Container Shop Logo</b></h3>
                        <Link to="/home" className="link-menu-section" ><a href="#" className="w3-bar-item w3-button">Home</a></Link>
                        <Link to="/categories" className="link-menu-section"><a href="#" className="w3-bar-item w3-button">All Categories</a></Link>
                        <Link to="/cart" className="link-menu-section"><a href="#" className="w3-bar-item w3-button">My Cart</a></Link>
                        <Link to="" className="link-menu-section" onClick={handleLogOut}><a href="#" className="w3-bar-item w3-button">Log Out</a></Link>
                    </div>
                </nav>
        </>
    )
}
