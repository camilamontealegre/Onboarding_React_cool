import React from 'react'


function Accordion({card, index, toggleCards}) {
    return (
        <div
           className={"card" + (card.open ? 'open': '')}
           key={index}
           onClick={() => toggleCards(index)}
           >
        <div className="card-title">
          {card.title}
        </div>
        <div className="card-description">
          {card.description} 
        </div >
     </div>
    )
}

export default Accordion