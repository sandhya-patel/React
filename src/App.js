import  DogCard from './DogCard.js';



import './App.css';
import Counter from './Counter.js';

function App() {
  return (
    <>
    <div className="App">

      <div  style = {
      {
        display : "flex"
      }
    }>
      <div>
  
        <DogCard name= "lotuse" Image="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"/>
        </div>
        <div>
        <DogCard name= "rose" Image="https://img.freepik.com/free-photo/vibrant-colors-nature-close-up-wet-purple-daisy-generated-by-artificial-intellingence_25030-63819.jpg"/>
       
        </div>
        <br/>
        <hr/>
      
      
    </div>
    </div>

    <br/>
    <Counter/>
    </>
  );
}

export default App;
