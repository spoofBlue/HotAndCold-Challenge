
import React from 'react';

import './allGuessStorage.css';

export default function AllGuessStorage(props) {
    return (
        <div className="container" id={props.id}>
            <h2>Past guesses:</h2>
            <ul className="list">
                {props.guessTokenList}
            </ul>
        </div>
    );
}