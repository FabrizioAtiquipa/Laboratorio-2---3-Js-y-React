export default function Total(props) {
  let suma = 0;
  return (
    <div>
      {props.parts.map((ejem, index) => {
        suma = suma + ejem.exercises;
      })}
      <div>
        <p>Number of exercises {suma}</p>
      </div>
    </div>
  );
};


