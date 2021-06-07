import React, { useState } from 'react';
import { BsPlusCircle } from "react-icons/bs";
import { BiMinusCircle } from "react-icons/bi";

const Question = ({title, info}) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
    <button className="btn" onClick={() => setShowInfo(!showInfo)}>
      {showInfo ? <BiMinusCircle /> : <BsPlusCircle />}
    </button>
      <header>
        <h4>{title}</h4>
      </header>
      <p>{showInfo && info}</p>
    </article>
  );
}

export default Question;
