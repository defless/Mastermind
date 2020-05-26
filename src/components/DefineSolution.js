import React, { useState } from 'react';

const DefineSolution = (props) => {

  var PROPOSITION = [];
  const [s1, setS1] = useState();
  const [s2, setS2] = useState();
  const [s3, setS3] = useState();
  const [s4, setS4] = useState();
  return (
    <div>
      <input
        className="input"
        onChange={(e) => {
          setS1(e.target.value);
        }}></input>
      <input
        className="input"
        onChange={(e) => {
          setS2(e.target.value);
        }}></input>
      <input
        className="input"
        onChange={(e) => {
          setS3(e.target.value);
        }}></input>
      <input
        className="input"
        onChange={(e) => {
          setS4(e.target.value);
        }}></input>
      <button onClick={() => {
        PROPOSITION.push(s1, s2, s3, s4);
        props.setSolution(PROPOSITION);
        console.log(PROPOSITION);
      }}>
        Define Solution
      </button>
    </div>
  );
};

export default DefineSolution;
