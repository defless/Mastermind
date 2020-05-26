import React, { useState } from 'react';

import TotalAtempts from './TotalAtempts';
import RandomSolution from './RandomSolution';
import Proposition from './Proposition';

import '../styles/App.css';

function App () {

  const [solution, setSolution] = useState([]);
  const [propositions, addProposition] = useState([]);
  const [totalAtempts, setTotalAtempts] = useState([]);

  return (
    <section>
      <div id="menubtns">
        <RandomSolution setSolution={setSolution}/>
        <button
          onClick={(e) => {
            setSolution([]);
            addProposition([]);
          }}>
            Abandonner
        </button>
        <TotalAtempts totalAtempts={totalAtempts}/>
      </div>
      <Proposition
        totalAtempts={totalAtempts}
        setTotalAtempt={setTotalAtempts}
        propositions={propositions}
        addProposition={addProposition}
        setSolution={setSolution}
        solution={solution}/>
    </section>
  );
}

export default App;
