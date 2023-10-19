import React from "react";
import { useCallback } from "react";

const Buttons = ({ generatePassword, code, password }) => {
  const copyPassword = useCallback(() => {
    code.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <button
        className="bg-black font-orb font-bold pl-5 pr-5 rounded-e-lg border-yellow-300 border-2 text-yellow-300 duration-700 hover:bg-yellow-300 hover:text-black active:opacity-20"
        onClick={copyPassword}
      >
        Copy ➜
      </button>
      <button
        className="bg-black font-orb font-bold pl-5 pr-5 rounded-e-lg  border-yellow-300 border-2 text-yellow-300 duration-700 hover:bg-yellow-300 hover:text-black active:opacity-20"
        onClick={generatePassword}
      >
        Generate
      </button>
    </>
  );
};

export default Buttons;
