type buttonProps = {
    setGameState: React.Dispatch<React.SetStateAction<string[]>>,
}


const ResetButton = ({setGameState}: buttonProps) => {
  return (
    <button onClick={() => setGameState(Array(9).fill(null))}>
        Reset!
    </button>
  )
}

export default ResetButton
