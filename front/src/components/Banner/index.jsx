import { NavLink } from 'react-router-dom'
import logo from '../../assets/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux';

const Banner = () => {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()

  //L'object de l'utilisateur
  const objectUser = user[0]

  const logout = () => {
    //Modification du prénom et du nom de l'utilisateur
    dispatch(logoutUser())
  }

    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
                {
                    objectUser.id === 0 ? 
                        (<div className='main-nav-user'>
                            <NavLink className="main-nav-item" to="/login">
                                <i className="fa fa-user-circle fa-xl"></i>
                                Sign In
                            </NavLink>
                        </div>)
                    :
                        (<div className='main-nav-user'>
                            <NavLink className='main-nav-item' to="/profile">
                                <i className="fa fa-user-circle fa-xl"></i>
                                <p>{objectUser.firstname}</p>
                            </NavLink>
                            <NavLink className="main-nav-item" to="/login" onClick={logout}>
                                Sign Out
                            </NavLink>
                        </div>) 

                }
        </nav>
    )
}

export default Banner