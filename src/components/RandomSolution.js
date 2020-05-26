import React from 'react';

const PIONS = ['red', 'green', 'blue', 'orange', 'pink', 'purple'];

const RandomSolution = (props) => {

  var Solution = [];

  function Generate () {
    var u = 0;
    Solution = [];
    for (var i = 0; i < 4; i++) {
      u = Math.round(Math.random() * 5);
      Solution.push(PIONS[u]);
    }
  }

  return (
    <div id="generatebtn">
      <button
        onClick={() => {
          Generate();
          props.setSolution(Solution);
          console.log(Solution);
        }}>
        Generate Random Solution
      </button>
    </div>
  );
};

export default RandomSolution;
