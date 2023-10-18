import React from "react";
import Buttons from "./buttons";


const Inputs = ({password, setLength, numberState, setcharState, charState, setNumberState, length, code, generatePassword}) => {
 

  return (
    <div>
      <div className="flex gap-2 mt-3">
      <input className='bg-black text-cyan-400 border-cyan-400 border-2 pl-2 pt-1 pb-1 pr rounded 'type="text" readOnly placeholder="Your password" value={password} ref={code}></input>
      <Buttons password={password} code={code} generatePassword={ generatePassword}/>
      </div>

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
