//Axios
import axios from 'axios'

const callAPi = async (email, password) => {

    try {
        const response = await axios.post('http://localhost:3001/api/v1/user/login', 
      {
        email: email,
        password: password,
      })

      if (!response) {
        throw new Error('La requête a échoué')
      }
      return response
        
    } catch (error) {

        // Gérer les erreurs
        console.error('Erreur lors de la connexion:', error.message)
    }
}

export default callAPi