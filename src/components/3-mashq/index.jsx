import "react"
import "./index.css";

function ColorList(props) {
    return (
      <div>
        <h2>3-mashq</h2>
        <p className="red">{props.red}</p>
        <p className="yashil">{props.yashil}</p>
        <p className="kok">{props.blu}</p>
        <p className="sariq">{props.sariq}</p>
        <p className="qizil">{props.qizil}</p>
      </div>
    );
 }

export default ColorList