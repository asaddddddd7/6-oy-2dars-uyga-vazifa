import "./index.css";
import React from "react";
function Animal(props) {
  return (
      <div className="animal">
          <h2>2-mashq</h2>
      <p>{props.it}</p>
      <p>{props.fil}</p>
      <p>{props.sher}</p>
      <p>{props.qush}</p>
    </div>
  );
}
export default Animal;
