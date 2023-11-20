import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';

//Axios
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'; 

//Redux
import { loginUser } from '../../redux';
const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //Redux
  const user = useSelector((state) => state.user);
  //L'object de l'utilisateur
  const objectUser = user[0]
  
  
  useEffect(() => {

    //Si l'utilisateur est deja connecté il sera rediriger vers la page profile
    if(objectUser.id === 1) {
      navigate(`/profile`, { replace: true })
    } 
  }, [objectUser, navigate])



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', 
      {
        email: email,
        password: password,
      });

      console.log('Réponse de l\'API:', response);

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

      


      



      //Successfully navigate to a profile page
      navigate(`/profile`, { replace: true })

    } catch (error) {

      // Gérer les erreurs de l'API
      console.error('Erreur lors de la connexion:', error.message);
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
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type='button' onClick={handleSubmit} >Sign In</button>
        </form>
      </section>
    </main>
  )
}

export default Login 


/*try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
		      'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        // Traiter la réponse de l'API en fonction de vos besoins
        console.log('Réponse de l\'API:'+ data);

        // Assurez-vous que la réponse contient un token
        const { token } = data;

        // Voici le token
        console.log('Voici le token : '+ token);

      } else {
        // Gérer les erreurs de l'API
        console.error('Erreur lors de la connexion:', response.status);
      }
    } catch (error) {
      // Gérer les erreurs de fetch
      console.error('Erreur lors de la connexion:', error.message);
    }
  };*/