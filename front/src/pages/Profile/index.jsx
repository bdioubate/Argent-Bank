import { useSelector } from 'react-redux'

import { Link, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

//Redux
import EditUserName from '../../components/EditUsername';

const Profile = () => {

  //const [typeTransaction, setTypeTransaction] = useState('SAVINGS')
  const navigate = useNavigate()
  const user = useSelector((state) => state.user);

  //L'object de l'utilisateur
  const objectUser = user[0]
  
  useEffect(() => {

    //Si l'utilisateur n'est pas connecté le rediriger vers la page login
    if(objectUser.id === 0) {
      navigate(`/login`, { replace: true })
    } else {
      console.log(objectUser)
    }
  }, [objectUser, navigate])

  const editUserName = () => {

    const headerProfile = document.querySelector('#header-profile')
    headerProfile.style.display = "none"

    const headerEditUserNameProfile = document.querySelector('#editUserName')
    headerEditUserNameProfile.style.display = "block"
  }

    return (

      user && (<main className="main bg-dark">
        <div className="header" id='header-profile'>
          <h1>Welcome back<br />{objectUser.firstname} {objectUser.lastname}!</h1>
          <button className="edit-button" onClick={editUserName}>Edit Name</button>
        </div>
        <EditUserName />
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <Link to='/transactions/CHECKING'>
              <button className="transaction-button">View transactions</button>
            </Link>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <Link to='/transactions/SAVINGS'>
              <button className="transaction-button">View transactions</button>
            </Link>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
          <Link to='/transactions/CREDITS_CARD'>
              <button className="transaction-button">View transactions</button>
            </Link>
          </div>
        </section>
      </main>)
    )
  }
  
  export default Profile 