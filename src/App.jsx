//import { useState } from 'react'
import strongSVG from '/strong.svg'
import './App.css'
import Character from './Character.jsx'
import defaultCharacter from './character_sheets/Mike_Swordman.json'

function App() {
  return (
    <>
      <div>
        <a>
          <img src={strongSVG} className="logo" alt="Strength" />
        </a>
        <Character characterData={defaultCharacter} />
      </div>

    </>
  )
}

export default App
