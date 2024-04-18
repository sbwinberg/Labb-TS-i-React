import Tile from './Tile';
import '../css/Board.css'
import { useState } from 'react';

const Board = () => {
    const [gameState, setGameState] = useState(Array(9).fill(null))
    const [currentPlayer, setCurrentPlayer] = useState('X')


    const checkWin = (updatedGameState : string[]) => {
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]            // diagonals
      ]
      return winPatterns.some(pattern => pattern.every(index => updatedGameState[index] === currentPlayer));
    }

    const cellClicked = (index: number) => {
        if(gameState[index] !== null) return
        const updatedGameState = gameState.map((cell, cellIndex) => cellIndex === index ? currentPlayer : cell)
        setGameState(updatedGameState)
        if(checkWin(updatedGameState)) alert(`${currentPlayer} wins!`)
        setCurrentPlayer(prev => prev === 'X' ? 'O' : 'X')
    }

  return (
    <div className="board">
      {gameState.map((cell, index) => <Tile cell={cell} index={index} key={index} cellClicked={cellClicked}/>)}
    </div>
  )
}

export default Board
