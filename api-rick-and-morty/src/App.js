import "./App.css";
import CharCard from "./components/CharCard";
import Characters from "./components/Characters";
import { useEffect, useState } from "react";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((res) => setCharacterList(res.results))
      .catch((err) => err);
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <Characters CharCard={CharCard} />
        <CharCard characterList={characterList} />
      </div>
    </div>
  );
}

export default App;
