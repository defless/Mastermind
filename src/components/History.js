import React from 'react';

const History = (props) => {
  return (
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
};

export default History;
