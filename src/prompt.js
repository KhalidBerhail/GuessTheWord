
import './prompt.css';
import React, { Component } from 'react';

class Prompt extends Component{

 

    checkForDuplicates(array) {
        let setSize = new Set(array).size
        return setSize !== array.length
    }
      
    
    render(){

        return(
            <div className="Prompt">
                {
                   this.props.revealed === new Set(this.props.word).size ?  <h2 className="won">Gagné</h2>: this.props.word.split('').map((letter,index)=>(
                        
                        this.props.reveal.includes(letter) ? <Element key={index} txt={letter} hidden={false}/>  : <Element key={index} txt={letter} hidden={true}/>
                
                    ))
                }
            </div>
        )
        
    }
}

function Element ({txt,hidden}){
   return <h4 className={"element hidden"+(hidden===false ? " true":"")}>{hidden?'':txt}</h4>
}

export default Prompt;