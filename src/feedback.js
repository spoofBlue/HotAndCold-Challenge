
import React from 'react';

export default function Feedback(props) {
    return (
        <div className="container" id={props.id}>
            <h2>{interpretAnswer(props)}</h2>
        </div>
    );
}

function interpretAnswer(props) {
    const difference = Math.abs(props.guess - props.answer);
    if (props.guess === "") {   //Default at the beginning of the game.
        return "When you make a guess, I'll tell you how close you are!";
    } else if (difference === 0) {
        return "You got it!";
    } else if (difference < 5) {
        return "You're on fire!!";
    } else if (difference < 10) {
        return "You're getting hotter!";
    } else if (difference < 20) {
        return "You feel a little warm."
    } else if (difference < 30) {
        return "It's cool.";
    } else {
        return "It's freezing cold!";
    }
}