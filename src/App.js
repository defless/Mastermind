import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

const PIONS = ["red","green","blue","orange","pink","purple"];


function App() {

  const [solution, setSolution] = useState([]);
  const [propositions, addProposition] = useState([]);
  const [totalAtempts, setTotalAtempts] = useState([])

  return (
    <section>
        <div id="menubtns">
          <Generate_solution setSolution={setSolution}/>
          <button onClick={(e)=>{setSolution([]);addProposition([])}}>Abandonner</button>
          <Total_atempts totalAtempts={totalAtempts}/>
        </div>
        <Generate_proposition totalAtempts={totalAtempts} setTotalAtempt={setTotalAtempts} propositions={propositions} addProposition={addProposition} setSolution={setSolution} solution={solution}/>
    </section>
  );
}

const Total_atempts = (props) => {
  var totalAtempts_copy = Object.assign([], props.totalAtempts);

  return(
    <div id="scores">
      {props.totalAtempts.map((item)=>(
        <p>Gagnées en {item.value}:{item.count}</p>
      ))}
    </div>
  )
}

const Define_solution = (props) => {

  var PROPOSITION = [];
  const [s1, setS1] = useState();
  const [s2, setS2] = useState();
  const [s3, setS3] = useState();
  const [s4, setS4] = useState();
  return(
  <div>
    <input className="input" onChange={(e)=>{setS1(e.target.value);}}></input>
    <input className="input" onChange={(e)=>{setS2(e.target.value);}}></input>
    <input className="input" onChange={(e)=>{setS3(e.target.value);}}></input>
    <input className="input" onChange={(e)=>{setS4(e.target.value);}}></input>
    <button onClick={()=>{
    PROPOSITION.push(s1,s2,s3,s4);
    props.setSolution(PROPOSITION);
    console.log(PROPOSITION);
  }}>Define Solution
    </button>
  </div>
  );
}

const Generate_solution = (props) => {

  var Solution = [];

  function Generate(){
    var u = 0;
    Solution = [];
    for (var i = 0; i < 4; i++) {
      u=Math.round(Math.random()*5);
      Solution.push(PIONS[u]);
      console.log(u);
    }
  }

  return(
    <div id="generatebtn">
      <button onClick={()=>{Generate();props.setSolution(Solution);console.log(Solution)}}>Generate Random Solution</button>
    </div>
  )
}

const Generate_proposition = (props)=> {

  const [p1, setP1] = useState();
  const [p2, setP2] = useState();
  const [p3, setP3] = useState();
  const [p4, setP4] = useState();
  var [bNoire, setbNoire] = useState(0);
  var [bBlanche, setbBlanche] = useState(0);
  var [atempts, setAtempts] = useState(0);

  var PROPOSITION = [];
  var alreadyIn = false;

  function check(){

    var PROPOSITION_COPY = Object.assign([], PROPOSITION);
    var solution_copy = Object.assign([], props.solution);
    setAtempts(atempts+=1);

    for (var i = 0; i < PROPOSITION_COPY.length; i++) {
      if (PROPOSITION_COPY[i]===solution_copy[i]) {
        setbNoire(bNoire+=1);
         solution_copy[i]="Noir";
         PROPOSITION_COPY[i]="noir";
      }
    }

    for (var u = 0; u < PROPOSITION_COPY.length; u++) {
      for (var n = 0; n < solution_copy.length; n++) {
        if (PROPOSITION_COPY[u]===solution_copy[n]) {
          setbBlanche(bBlanche+=1);
          solution_copy[n]="Blanc";
          PROPOSITION_COPY[u]="blanc";
        }
      }
    }
    if (bNoire!==4) {
      props.addProposition([ ...props.propositions, {atempts:atempts, b:bBlanche,n:bNoire,prop:PROPOSITION}]);
    }
    if (bNoire===4 && props.solution.length===4){
      alert('Tu as trouvé !');
      props.addProposition([]);
      props.setTotalAtempt([ ...props.totalAtempts, atempts]);
      for (var i = 0; i < props.totalAtempts.length; i++) {
        if (props.totalAtempts[i].value===atempts) {
          props.totalAtempts[i].count+=1;
          alreadyIn=true;
        }
      }
      if (alreadyIn===false) {
        props.setTotalAtempt([ ...props.totalAtempts, {value:atempts,count:1}]);
        alreadyIn=true;
      }
      setAtempts(0);
      props.setSolution();
    }
    if (atempts===16) {
      alert('Tu as perdu !');
      props.addProposition([]);
      for (var i = 0; i < props.totalAtempts.length; i++) {
        if (props.totalAtempts[i].value===atempts) {
          props.totalAtempts[i].count+=1;
          alreadyIn=true;
        }
      }
      if (alreadyIn===false) {
        props.setTotalAtempt([ ...props.totalAtempts, {value:16,count:1}]);
        alreadyIn=true;
      }
      setAtempts(0);
      props.setSolution();
    }

  };

  return(
    <React.Fragment>
      <div id="proposition">
        <Color_picker atempts={atempts} setPX={setP1}/>
        <Color_picker atempts={atempts} setPX={setP2}/>
        <Color_picker atempts={atempts} setPX={setP3}/>
        <Color_picker atempts={atempts} setPX={setP4}/>

        <button onClick={()=>{
          PROPOSITION.push(p1,p2,p3,p4);
          check();
          setbNoire(0);
          setbBlanche(0);
        }}>Submit proposition</button>
      </div>
      <History propositions={props.propositions}/>
    </React.Fragment>
  )
}

const History = (props)=> {
  return(
    <div id="history">
    {props.propositions.map((item) => (
      <div class="history_item">
        {item.prop.map((item)=>(
          <button style={{backgroundColor:item}} class="dropbtn"></button>
        ))}
        <h3>Blanches {item.b}</h3>
        <h3>Noires {item.n}</h3>
        <h3>Tentatives {item.atempts}</h3>
      </div>
      ))}
    </div>
  );
}

const Color_picker = (props)=>{
  const [handleColor, setHandleColor] = useState('white');
  return(
    <div class="dropdown">
      <button style={{backgroundColor:handleColor}} class="dropbtn"></button>
      <div class="dropdown-content">
        <span onClick={(e)=>{setHandleColor(e.target.id);props.setPX(e.target.id)}} id="red" title="1">Rouge</span>
        <span onClick={(e)=>{setHandleColor(e.target.id);props.setPX(e.target.id)}} id="green" title="2">Vert</span>
        <span onClick={(e)=>{setHandleColor(e.target.id);props.setPX(e.target.id)}} id="blue" title="3">Bleu</span>
        <span onClick={(e)=>{setHandleColor(e.target.id);props.setPX(e.target.id)}} id="orange" title="4">Orange</span>
        <span onClick={(e)=>{setHandleColor(e.target.id);props.setPX(e.target.id)}} id="pink" title="5">Rose</span>
        <span onClick={(e)=>{setHandleColor(e.target.id);props.setPX(e.target.id)}} id="purple" title="6">Violet</span>
      </div>
    </div>
  )
}
export default App;
