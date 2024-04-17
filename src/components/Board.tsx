import Tile from './Tile';
import '../css/Board.css'
import { useState } from 'react';

const Board = () => {
    const gameState = Array(9).fill(null);
    const [currentPlayer, setCurrentPlayer] = useState('X')

    const cellClicked = (index) => {
        if(gameState[index] !== null) return
        gameState[index] = currentPlayer;

    }

  return (
    <div className="board">
      {gameState.map((cell, index) => <Tile cell={cell} index={index} cellClicked={cellClicked}/>)}
    </div>
  )
}

export default Board
