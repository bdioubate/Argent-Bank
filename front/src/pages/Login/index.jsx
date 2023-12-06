import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

//callAPI

//Axios
//import axios from 'axios'

//Redux
import { useDispatch } from 'react-redux'; 
import { loginUser } from '../../redux';
import callAPi from '../../data/callAPI';


const Login = () => {

  //LocalStorage
  let emailRemember = ''
  let passwordRemember = ''
  if (localStorage.getItem('rememberUser')) {
    emailRemember = JSON.parse(localStorage.getItem('rememberUser')).email 
    passwordRemember = JSON.parse(localStorage.getItem('rememberUser')).password
  }
  
  const [email, setEmail] = useState(emailRemember)
  const [password, setPassword] = useState(passwordRemember)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const prohibitedValue = () => {
    //Valeurs interdite par l'utilisateur risque d'injection
    const prohibitedValues = ["<", ">"]
    if (prohibitedValues.some(i => email.includes(i)) || prohibitedValues.some(i => password.includes(i))) {
      throw new Error('Valeurs entrées interdites !')
    }
  }

  const registerUserRedux = (response) => {
    //Recuperation du prenom et du nom a partir de l'email
    const firstAndLastname = email.split('.')[0]

    //Prénom de l'utilisateur
    const firstname = firstAndLastname.split('@')[0]
  
    //Nom de l'utilisateur
    const lastname = firstAndLastname.split('@')[1]

    //Token de l'utilisateur
    const { token } = response.data.body 

    const payloadUser = `${firstname}/${lastname}/${token}`

    //Enregistrer le nouvelle utilisateur dans redux
    dispatch(loginUser(payloadUser))
  }

  const checkboxRemember = () => {
    //Checkbox remember
    const rememberId = document.getElementById('remember-me')

    //const objectRemenber = {email: email, password: password }
    if (rememberId.checked) {
      localStorage.setItem('rememberUser', JSON.stringify({email: email, password: password }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      
      //Valeurs interdite par l'utilisateur risque d'injection
      prohibitedValue()

      //Appel a l'API
      const response = await callAPi(email, password)
      
      //Enregistre le nouvelle utilisateur dans redux
      registerUserRedux(response)

      //Enregistre dans le localStorage
      checkboxRemember()

      //Successfully navigate to a profile page
      navigate(`/profile`, { replace: true })

    } catch (error) {

      // Gérer les erreurs
      console.error(error.message)
    }
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">
              Username
            </label>
            <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">
              Password
            </label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me"/><label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type='button' onClick={handleSubmit} >Sign In</button>
        </form>
      </section>
    </main>
  )
}

export default Login 