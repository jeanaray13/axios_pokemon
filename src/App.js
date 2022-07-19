
import './App.css';
import {useState} from "react"
import axios from 'axios';

function App() {

  const [pokeList, setPokeList] = useState([]);

  const clickHandler = (e) => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then(response=>{
      setPokeList(response.data.results)
    })

  };

  return (
    <div>
      <button onClick={clickHandler}>Fetch Pokemon</button>
      <ul className="App">
      {
        pokeList.map((item, idx) =>{
          return <li key={idx}>
            {(item.name)}</li>
        })
      }
      </ul>
    </div>
  );
}

export default App;
