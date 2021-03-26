import React from 'react';

export default function Total(props) {
    //no destructuring
    return(
        <div>
            <p>Number of exercises {props.part1.exercises+props.part2.exercises+props.part3.exercises}</p>
        </div>
    );
}