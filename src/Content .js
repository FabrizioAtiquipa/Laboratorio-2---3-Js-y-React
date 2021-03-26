import React from 'react';
import Part from './Part';

export default function Content(props) {

    return(
        <div>
         {
             props.parts.map((ejem, index) => {
                 return(
                     <Part enunciado={ejem.name} num={ejem.exercises}></Part>
                 );
             })
         }
        </div>
     )
}

