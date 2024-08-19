import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  console.log(useState())
  console.log(isOn)

  function handleClick() {
    setIsOn((isOn) => !isOn);
    console.log(isOn)
  }
  const color = isOn ? "green" : "firebrick" ;

  return (
    <button style={{ background: color }} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>
  );
}

export default Toggle;
