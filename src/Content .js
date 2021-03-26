import React from 'react';
import Part from './Part';

export default function Content(props) {

    return(
        <div>
            <Part enunciado={props.part1} num={props.exercises1} />
            <Part enunciado={props.part2} num={props.exercises2} />
            <Part enunciado={props.part2} num={props.exercises3} />
        </div>
    );
}