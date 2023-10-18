import React from "react";


const Inputs = ({password, setLength, numberState, setcharState, charState, setNumberState, length, code}) => {
 

  return (
    <div>
      <input type="text" readOnly placeholder="Your password" value={password} ref={code}></input>

      <input type="range" min={6} max={20} value={length} onChange={(e) => {setLength(e.target.value)}}></input>
      <label className="text-white">Length: {length}</label>

      <input type="checkbox" defaultChecked={numberState} onChange={() => {setNumberState((prevState) => !prevState)}}>
      </input>
      <label className="text-white">Numbers</label>

      <input type="checkbox" defaultChecked={charState} onChange={() => {setcharState((prevState) => !prevState)}}></input>
      <label className="text-white">Special Charaters</label>
    </div>
  );
};

export default Inputs;
