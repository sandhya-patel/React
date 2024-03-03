import Button from "./Button";
import Image from "./Image";
import Person from "./Person";
import Header from "./Header.js";
import List from "./List.js";



 function DogCard(props){
    let time ="this is flower site"
   
    return(
        <>
        <h2 style ={
            {
                color :"red",
                fontwight : "bold"

            }
        }>
            {time}
        </h2>
        <h3>
            {props.name}</h3>
   
   <Image src= {props.Image}/>
 
  
   <Person name= "sandhya" age="21"/>
        <Person name= "supriya" age="23"/>

        <Button text="Click me!" onClick={() => console.log("Button clicked")} />
        <Header title="this is my frist react tab!"/> 
   
        <List items={['apple', 'banana', 'orange']} />

    </>
    );


}

export default DogCard;