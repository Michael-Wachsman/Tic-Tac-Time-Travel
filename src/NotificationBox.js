import * as React from "react";
import './index.css';


// component function not class lol
export default function NotificationBox(props) {

  if (!props.visible) {
    return <></>;
  }

  return (<div className="notification">{props.text}</div>);
}