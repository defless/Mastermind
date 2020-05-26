import React from 'react';

const TotalAtempts = (props) => {
  var totalAtemptsCopy = Object.assign([], props.totalAtempts);

  return (
    <div id="scores">
      {props.totalAtempts.map((item) => (
        <p key="" >Gagnées en {item.value}:{item.count}</p>
      ))}
    </div>
  );
};

export default TotalAtempts;
