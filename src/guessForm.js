
import React from 'react';

export default function GuessForm(props) {
    return (
        <div className="container" id={props.id}>
            <form onSubmit={function(event) {
                event.preventDefault();
                return props.onSubmit(event.target.guess.value);
            }}>
                <input type="text" placeholder="Guess a number..." name="guess" value={props.value} onChange={e => props.onChange(e.target.value)} />
                <button className="button" name="Submit your guess." >Guess</button>
            </form>
        </div>
    );
}