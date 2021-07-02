import { Component } from "react";
import "./App.css";
import KeyBoard from "./KeyBoard";
import Prompt from "./prompt";

var randomWords = require("random-words");

const ALLOWED_TRIES = 5;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      randomWord: randomWords().toUpperCase(),
      reveal: [],
      tries: 0,
      lost: false,
      correctGuess : 0,
      gameWon : false
    };
    this.testEntry = this.testEntry.bind(this);
    this.restartLost = this.restartLost.bind(this);
    this.restartWon = this.restartWon.bind(this);
    console.log(this.state.randomWord);
  }

shouldComponentUpdate(nextProps, nextState)
{
  if(nextState.correctGuess === new Set(nextState.randomWord).size)
  {
    if(nextState.gameWon===false)
    {
      this.setState({
        gameWon: true
      }); 
    }
  }

  if(nextState.tries === ALLOWED_TRIES && nextState.lost===false)
  {
      this.setState({
        lost: true
      }); 
  }
  return true;
}

  testEntry(entry) {
    var x = 0;
    this.state.randomWord.split("").map((letter, key) => { //S O O A
      if (entry === letter) {
        this.setState({
          reveal: [...this.state.reveal, letter],
          score: this.state.score + 2,
          correctGuess: this.state.correctGuess + 1
        });
        x++;
      }
      return null;
    });

    if(x === 0){
      this.setState({
        score: this.state.score - 1,
        tries: this.state.tries + 1,
      });
    }
    
    
  }

 
  restartLost(){
    this.setState({
      score: 0,
      randomWord: randomWords().toUpperCase(),
      reveal: [],
      tries: 0,
      lost: false,
      correctGuess : 0,
      gameWon : false
    })
  }

  restartWon(){
    this.setState({
      randomWord: randomWords().toUpperCase(),
      reveal: [],
      tries: 0,
      correctGuess : 0,
      gameWon : false
    })
  }

  render() {
    return (
      <div className="App">
        tries : {this.state.tries}
        {this.state.lost ? (
          <div>
            <div className="Score lost">
              Score : <span>{this.state.score}</span>
            </div>
            <div className="GameOver">
              <h4>
                <span>Le mot était</span> {this.state.randomWord}
              </h4>
              <button className="restartButtonLost" onClick={this.restartLost}>restart</button>
            </div>
          </div>
        ) : (
          <div>
            <div className="Score">
              Score : <span>{this.state.score}</span>
            </div>
            <Prompt word={this.state.randomWord} reveal={this.state.reveal} revealed = {this.state.correctGuess} />
            {this.state.gameWon ? (<button className="restartButtonWon" onClick={this.restartWon}>restart</button>):<KeyBoard onClick={this.testEntry} />}
            
          </div>
        )}
      </div>
    );
  }
}

export default App;
