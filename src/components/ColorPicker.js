import React, { useState } from 'react';

const ColorPicker = (props) => {
  const [handleColor, setHandleColor] = useState('white');
  return (
    <div className="dropdown">
      <button
        style={{ backgroundColor: handleColor }}
        className="dropbtn">
      </button>
      <div className="dropdown-content">
        <span
          onClick={(e) => {
            setHandleColor(e.target.id);
            props.setPX(e.target.id);
          }}
          id="red"
          title="1">Rouge</span>
        <span
          onClick={(e) => {
            setHandleColor(e.target.id);
            props.setPX(e.target.id);
          }}
          id="green"
          title="2">Vert</span>
        <span
          onClick={(e) => {
            setHandleColor(e.target.id);
            props.setPX(e.target.id);
          }}
          id="blue"
          title="3">Bleu</span>
        <span
          onClick={(e) => {
            setHandleColor(e.target.id);
            props.setPX(e.target.id);
          }}
          id="orange"
          title="4">Orange</span>
        <span
          onClick={(e) => {
            setHandleColor(e.target.id);
            props.setPX(e.target.id);
          }}
          id="pink"
          title="5">Rose</span>
        <span
          onClick={(e) => {
            setHandleColor(e.target.id);
            props.setPX(e.target.id);
          }}
          id="purple"
          title="6">Violet</span>
      </div>
    </div>
  );
};

export default ColorPicker;
