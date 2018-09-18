
import React from 'react';
import GuessToken from './guessToken';

import './previousGuessStorage.css';

export default function PreviousGuessStorage(props) {
    return (
        <div id={props.id}>
            <h2>Previous Guess: </h2>
            <GuessToken guess={props.guess}/>
        </div>
    );
}