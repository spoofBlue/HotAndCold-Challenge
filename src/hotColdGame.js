
import React from 'react';

import Feedback from './feedback';
import GuessForm from './guessForm';
import PreviousGuessStorage from './previousGuessStorage';
import AllGuessStorage from './allGuessStorage';
import GuessToken from './guessToken';
import Restart from './restart';

export default class HotColdGame extends React.Component {
    constructor(props) {
        super(props);
        const answer = (Math.floor(Math.random() * props.maximum)).toString();
        this.state = {
            guess : "" ,
            value : "" ,
            maximum : props.maximum ,  // Storing the maximum value in the state, in case I want to allow the user to edit this value.
            answer : answer ,
            allGuesses : []
        }
    }

    setGuess(guess) {
        if (guess !== "" && this.state.allGuesses.indexOf(guess) === -1) {
            this.setAllGuesses(guess);
            this.setState({
                guess
            });
        }
    }

    setValue(value) {
        this.setState({
            value
        });
    }

    setAllGuesses(guess) {
        this.setState({
            allGuesses : [...this.state.allGuesses, guess]
        });
    }

    resetGame() {
        this.setState({
            guess : "" ,
            answer : (Math.floor(Math.random() * this.state.maximum)).toString() ,
            allGuesses : []
        });
    }

    render() {
        const guessTokenList = this.state.allGuesses.map((guess, index) => {
            return (
            <li key={index}>
                {<GuessToken guess={guess} />}
            </li>);
        });
        return (
            <div className="hot-cold-game">
                <h2>I'm thinking of a number between 1 and {this.state.maximum}</h2>
                <GuessForm id="guess-form" value={this.state.value} onChange={value => this.setValue(value)} onSubmit={guess => {
                    this.setValue("");
                    this.setGuess(guess);}} />
                <PreviousGuessStorage id="previous-guess-storage" guess={this.state.guess} />
                <Feedback id="feedback" guess={this.state.guess} answer={this.state.answer} />
                <AllGuessStorage id="all-guess-storage" guessTokenList={guessTokenList}/>
                <Restart id="restart" onClick={() => this.resetGame()}/>
            </div>
        );
    };
}

HotColdGame.defaultProps = {
    maximum : 100
}