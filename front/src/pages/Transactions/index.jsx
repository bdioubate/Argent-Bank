
import { useNavigate } from "react-router-dom";
import CardTransaction from "../../components/CardTransaction"
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Transactions = () => {

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

    //Recuperer le type avec useparams ou avec en enregistrant dans un state avec redux ?
    //const { typeTransaction } = useParams() 


    return(
        (<main className="main">
            <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                <p className="account-amount">$10,928.42</p>
                <p className="account-amount-description">Available Balance</p>
            </div>
            <section id="transactions">
                <div id="transactions__header">
                    <h3>DATE</h3>
                    <h3>DESCRIPTION</h3>
                    <h3>AMOUNT</h3>
                    <h3>BALANCE</h3>
                </div>
                <div id="transactions__body">
                    <CardTransaction />
                    <CardTransaction />
                    <CardTransaction />
                    <CardTransaction />
                    <CardTransaction />
                    <CardTransaction />
                </div>
            </section>
        </main>)
    )
  }
  
  export default Transactions 