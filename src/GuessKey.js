import React from 'react'

import './GuessKey.css'


const GuessKey = ({index, letter,onclick})=>{
    return(
        <div className="guessKey" onClick={(e) => {onclick(letter);e.currentTarget.classList.add('clicked');e.currentTarget.style.pointerEvents="none"}}>
           <span className="letter">{letter}</span>
        </div>
    )
}

export default GuessKey;