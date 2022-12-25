import { useState } from "react";

function getRandomanimals(){
    const animals = ['cow','bird','horse','tiger','gator']
    return animals[Math.floor(Math.random() * animals.length)];
}
console.log(getRandomanimals())

function App(){
    
    const [animals,setAnimals]=useState([]);


    const handleClick = ()=>{
        setAnimals([...animals, getRandomanimals()]);
    }
    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>{animals}</div>
        </div>
    )
}
export default App;