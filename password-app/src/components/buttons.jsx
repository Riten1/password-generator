import React from "react";
import { useCallback } from "react";

const Buttons = ({ generatePassword, code, password }) => {
  const copyPassword = useCallback(() => {
    code.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <button className="bg-yellow-300 font-orb font-bold pl-5 pr-5 rounded-e-lg" onClick={copyPassword}>
        Copy
      </button>
      <button className="bg-yellow-300 font-orb font-bold pl-5 pr-5 rounded-e-lg" onClick={generatePassword}>
        Generate
      </button>
    </>
  );
};

export default Buttons;
