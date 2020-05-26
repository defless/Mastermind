import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import History from './History';

const Proposition = (props) => {

  const [p1, setP1] = useState();
  const [p2, setP2] = useState();
  const [p3, setP3] = useState();
  const [p4, setP4] = useState();
  var [bNoire, setbNoire] = useState(0);
  var [bBlanche, setbBlanche] = useState(0);
  var [atempts, setAtempts] = useState(0);

  var PROPOSITION = [];
  var alreadyIn = false;

  function check() {

    var PROPOSITION_COPY = Object.assign([], PROPOSITION);
    var solutionCopy = Object.assign([], props.solution);
    setAtempts(atempts += 1);

    for (var i = 0; i < PROPOSITION_COPY.length; i++) {
      if (PROPOSITION_COPY[i] === solutionCopy[i]) {
        setbNoire(bNoire += 1);
        solutionCopy[i] = 'Noir';
        PROPOSITION_COPY[i] = 'noir';
      }
    }

    for (var u = 0; u < PROPOSITION_COPY.length; u++) {
      for (var n = 0; n < solutionCopy.length; n++) {
        if (PROPOSITION_COPY[u] === solutionCopy[n]) {
          setbBlanche(bBlanche += 1);
          solutionCopy[n] = 'Blanc';
          PROPOSITION_COPY[u] = 'blanc';
        }
      }
    }
    if (bNoire !== 4) {
      props.addProposition([...props.propositions,
        { atempts: atempts, b: bBlanche, n: bNoire, prop: PROPOSITION }]);
    }
    if (bNoire === 4 && props.solution.length === 4) {
      alert('Tu as trouvé !');
      props.addProposition([]);
      props.setTotalAtempt([...props.totalAtempts, atempts]);
      for (var j = 0; j < props.totalAtempts.length; j++) {
        if (props.totalAtempts[j].value === atempts) {
          props.totalAtempts[j].count += 1;
          alreadyIn = true;
        }
      }
      if (alreadyIn === false) {
        props.setTotalAtempt([...props.totalAtempts, { value: atempts, count: 1 }]);
        alreadyIn = true;
      }
      setAtempts(0);
      props.setSolution();
    }
    if (atempts === 16) {
      alert('Tu as perdu !');
      props.addProposition([]);
      for (var k = 0; k < props.totalAtempts.length; k++) {
        if (props.totalAtempts[k].value === atempts) {
          props.totalAtempts[k].count += 1;
          alreadyIn = true;
        }
      }
      if (alreadyIn === false) {
        props.setTotalAtempt([...props.totalAtempts, { value: 16, count: 1 }]);
        alreadyIn = true;
      }
      setAtempts(0);
      props.setSolution();
    }
  }

  return (
    <React.Fragment>
      <div id="proposition">
        <ColorPicker atempts={atempts} setPX={setP1}/>
        <ColorPicker atempts={atempts} setPX={setP2}/>
        <ColorPicker atempts={atempts} setPX={setP3}/>
        <ColorPicker atempts={atempts} setPX={setP4}/>

        <button onClick={() => {
          PROPOSITION.push(p1, p2, p3, p4);
          check();
          setbNoire(0);
          setbBlanche(0);
        }}>Submit proposition</button>
      </div>
      <History propositions={props.propositions}/>
    </React.Fragment>
  );
};

export default Proposition;
