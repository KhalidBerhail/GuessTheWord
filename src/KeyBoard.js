import React, { Component } from 'react';
import GuessKey from './GuessKey';
import './KeyBoard.css'




class KeyBoard extends Component{

    constructor(props){
        super(props)
        this.state = { visible : true}
    }

    

    render(){
        return(
            <div className="keyboard">
                {letters.map((letter,index)=>(
                   
                    <GuessKey 
                      key={index} 
                      letter={letter}
                      onclick={this.props.onClick}
                    />

                ))}
            </div>
        )
        
    }
}


export default KeyBoard;
//outlis
function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}

const letters = genCharArray('A','Z')

