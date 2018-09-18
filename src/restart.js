 
 import React from 'react';

 export default function Restart(props) {
    return (
        <div className="container" id={props.id}>
            <button onClick={props.onClick}>Restart Game</button>
        </div>
    )
 }