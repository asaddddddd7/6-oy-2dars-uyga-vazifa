import "react";

function WeekDays(props) {
  return (
    <div>
      <h2>4-mashq</h2>
      <ul>
        <li>{props.dushanba}</li>
        <li>{props.seshanba}</li>
        <li>{props.chorshanba}</li>
        <li>{props.payshanba}</li>
        <li>{props.juma}</li>
        <li>{props.shanba}</li>
        <li>{props.yakshanba}</li>
      </ul>
    </div>
  );
}

export default WeekDays;
