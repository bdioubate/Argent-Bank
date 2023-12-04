
import { useParams } from "react-router-dom";
import CardTransaction from "../../components/CardTransaction"
//Data
import allTransactions from '../../data/transactions.json' 

const Transactions = () => {

    //Recuperer le type avec useparams 
    const { typeTransaction } = useParams() 

    const transactionsList = Object.entries(allTransactions[0]).find((item) => item[0] === `${typeTransaction}`)
    const infoAccount = transactionsList[1][0]

    return(
        transactionsList && infoAccount && (<main className="main">
            <div className="account-content-wrapper">
                <h3 className="account-title">{infoAccount.account_title}</h3>
                <p className="account-amount">{infoAccount.account_amount}</p>
                <p className="account-amount-description">{infoAccount.account_amount_description}</p>
            </div>
            <section id="transactions">
                <div id="transactions__header">
                    <h3>DATE</h3>
                    <h3>DESCRIPTION</h3>
                    <h3>AMOUNT</h3>
                    <h3>BALANCE</h3>
                </div>
                <div id="transactions__body">
                  {
                    transactionsList[1].map((transaction, index) => {
                      if (index === 0) {
                        return null
                      }else {
                      return <CardTransaction key={index}
                      date={transaction.date}
                      description={transaction.description}
                      amount={transaction.amount}
                      balance={transaction.balance}
                      transaction_type={transaction.transaction_type}
                      category={transaction.category}
                      notes={transaction.notes}
                      />
                    }
                    })
                  }
                </div>
            </section>
        </main>)
    )
  }
  
  export default Transactions 