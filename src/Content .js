import React from 'react';
import Part from './Part';

export default function Content(props) {
    //destructuring
    const{part1, part2, part3}=props
    const{name, exercises}=part1
    return(
        <div>
            <Part enunciado={name} num={exercises} />
            <Part enunciado={part2.name} num={part2.exercises} />
            <Part enunciado={part3.name} num={part3.exercises} />
        </div>
    );
}