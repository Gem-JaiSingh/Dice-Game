import StartGame from './component/StartGame';
import GamePlay from "./component/GamePlay";
import { useState } from "react";


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  )
}

export default App