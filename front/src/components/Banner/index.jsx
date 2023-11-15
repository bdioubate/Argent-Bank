import { NavLink } from 'react-router-dom'
import logo from '../../assets/argentBankLogo.png'
const Banner = () => {
    return (
        <nav class="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img
                class="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
                />
                <h1 class="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                <NavLink className="main-nav-item" to="/login">
                    <i class="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
            </div>
        </nav>
    )
}

export default Banner