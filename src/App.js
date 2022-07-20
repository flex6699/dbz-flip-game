import "./App.css";
import { useState } from "react";

const cardImages = [
  { src: "/img/berrus.png" },
  { src: "/img/gohan.png" },
  { src: "/img/goku.png" },
  { src: "/img/krillin.png" },
  { src: "/img/trunks.png" },
  { src: "/img/vegeta.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card front" />
              <img className="back" src="/img/back4.png" alt="card back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
