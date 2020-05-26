import React from 'react';

const History = (props) => {
  return (
    <div id="history">
      {props.propositions.map((item) => (
        <div key="" className="history_item">
          {item.prop.map((item) => (
            <button
              key=""
              style={{ backgroundColor: item }}
              className="dropbtn">
            </button>
          ))}
          <h3>Blanches {item.b}</h3>
          <h3>Noires {item.n}</h3>
          <h3>Tentatives {item.atempts}</h3>
        </div>
      ))}
    </div>
  );
};

export default History;
