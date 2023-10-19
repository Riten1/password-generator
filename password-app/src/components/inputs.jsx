import React from "react";
import Buttons from "./buttons";

const Inputs = ({
  password,
  setLength,
  numberState,
  setcharState,
  charState,
  setNumberState,
  length,
  code,
  generatePassword,
}) => {
  return (
    <div className="inline-block p-5">
      <div className="flex gap-2 mt-3">
        <input
          className="bg-black text-cyan-400 border-cyan-400 border-2 pl-2 pt-1 pb-1 pr rounded font-orb font-medium w-72"
          type="text"
          readOnly
          placeholder="Your password"
          value={password}
          ref={code}
        ></input>
        <Buttons
          password={password}
          code={code}
          generatePassword={generatePassword}
        />
      </div>

      <div className="mt-3 ">
        <div>
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          ></input>
          <label className="text-white font-orb ml-1">Length: {length}</label>
        </div>

        <div>
          <input
            className="mr-1 "
            type="checkbox"
            defaultChecked={numberState}
            onChange={() => {
              setNumberState((prevState) => !prevState);
            }}
          ></input>
          <label className="text-white font-orb">Numbers</label>
        </div>

        <div>
          <input
            className="mr-1"
            type="checkbox"
            defaultChecked={charState}
            onChange={() => {
              setcharState((prevState) => !prevState);
            }}
          ></input>
          <label className="text-white font-orb">Special Charaters</label>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
