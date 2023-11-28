import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EightBall = ({ answers }) => {
  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("Think of a Question");

  const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const { msg, color } = answers[randomIndex];
    setColor(color);
    setMsg(msg);
  };

  const resetAnswer = () => {
    setColor("black");
    setMsg("Think of a Question");
  };

  return (
    <div
      className="eight-ball"
      style={{ backgroundColor: color }}
      onClick={color === "black" ? getRandomAnswer : resetAnswer}
    >
      <p className="answer">{msg}</p>
    </div>
  );
};

EightBall.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EightBall;
