import React from "react";
import './Cell.css'

const Cell = (props) => {
  const classes = ['Cell'];
  switch (props.mark) {
    case '#':
      classes.push('wall');
      break;
    case '*':
      classes.push('valid');
      break;
    case 'X':
      classes.push('used');
      break;
    default:
      break;

  }
  return <div className={classes.join(' ')} onClick={props.click}>{props.mark}</div>
}

export default Cell;