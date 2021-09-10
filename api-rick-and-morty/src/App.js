import "./App.css";
import CharCard from "./components/CharCard";
import Characters from "./components/Characters";
import { useEffect, useState } from "react";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => res.json())
      .then((res) => setCharacterList(res.results))
      .catch((err) => console.log(err));
  }, [page]);

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < 34) {
      setPage(page + 1);
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <Characters CharCard={CharCard} />
        <CharCard characterList={characterList} />
        <button onClick={previousPage} className="button">
          Last page
        </button>
        <button onClick={nextPage} className="button">
          Next page
        </button>
      </div>
    </div>
  );
}

export default App;
