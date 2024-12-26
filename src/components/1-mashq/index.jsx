import "./index.css";
import React from "react";
function HelloWorld(props) {
  return (
    <div>
      <h2>1-mashq</h2>
      <p>{props.laguage1}</p>
      <p>{props.laguage2}</p>
      <p>{props.laguage3}</p>
      <p>{props.laguage4}</p>
    </div>
  );
}
export default HelloWorld;
