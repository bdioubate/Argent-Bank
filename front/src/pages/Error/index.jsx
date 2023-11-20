import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div id="error">
        <h2 id="error__title">404</h2>
        <h3 id="error__text">Oups! La page que vous demandez n'existe pas.</h3>
        <Link id="error__back" to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
    )
  }
  
  export default Error 