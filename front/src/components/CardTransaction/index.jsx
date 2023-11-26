import { useState } from "react"


const CardTransaction = ({date, description, amount, balance, transaction_type, category, notes}) => {
    const [isVisible, setIsVisible] = useState('flex')
    const [isDown, setIsDown] = useState('down')

    return (
        <article className="card-transaction">
            <div 
                className="card-transaction__header"
                onClick={() => {
                    setIsVisible(isVisible ? false : true)
                    setIsDown(isDown ? false : true)
                  }}
            >
                <i className={`chevron fa-solid fa-chevron-${
                    isDown ? 'down' : 'up'
                }`}></i>
                <p>{date}</p>
                <p>{description}</p>
                <p>{amount}</p>
                <p>{balance}</p>
            </div>
            <div 
                className="card-transaction__body"
                style={{ display: isVisible ? 'none' : 'flex' }}
            >
                <p>Transaction Type: {transaction_type}</p>
                <div className="card-transaction__body__category"><p>Category: {category}</p><span className="fa-solid fa-pencil fa-xl"></span></div> 
                <div className="card-transaction__body__notes"><p>Notes: {notes}</p><span className="fa-solid fa-pencil fa-xl"></span></div>
            </div>
        </article>
    )
}

export default CardTransaction