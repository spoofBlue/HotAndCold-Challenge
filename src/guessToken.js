
import React from 'react';
import './guessToken.css'

export default function GuessToken(props) {
    return (
        <span className="guess-token">{props.guess}</span>
    );
}