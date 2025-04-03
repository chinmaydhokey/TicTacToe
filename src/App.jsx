import { useState } from 'react'
import TicTacToe from './Components/TicTacToe/TicTacToe'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TicTacToe/>
    </>
  )
}

export default App
