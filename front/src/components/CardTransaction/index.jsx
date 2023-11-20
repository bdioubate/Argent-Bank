import { useState } from "react"


const CardTransaction = () => {
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
                <p>{"June 20th, 2020"}</p>
                <p>{"Golden Sun Bakery"}</p>
                <p>{"$5.00"}</p>
                <p>{"$2082.79"}</p>
            </div>
            <div 
                className="card-transaction__body"
                style={{ display: isVisible ? 'none' : 'flex' }}
            >
                <p>Transaction Type: {"Electronic"}</p>
                <div className="card-transaction__body__category"><p>Category: {"Food"}</p><span class="fa-solid fa-pencil fa-xl"></span></div> 
                <div className="card-transaction__body__notes"><p>Notes: {""}</p><span class="fa-solid fa-pencil fa-xl"></span></div>
            </div>
        </article>
    )
}

export default CardTransaction