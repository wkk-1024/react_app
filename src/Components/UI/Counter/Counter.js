import React, {useState} from 'react';
import classes from './Counter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlus,faCircleMinus} from "@fortawesome/free-solid-svg-icons";

const Counter = (props) => {
  // const [num, setNum] = useState(props.amount);
  return (
    <div className={classes.content}>
      {props.amount && props.amount !== 0 ?
        <>
          <FontAwesomeIcon style={{color: "#FFD43B",}} onClick={()=>props.reduceNum(props.good_id,props.amount)} icon={faCircleMinus} />
          <p className={classes.num}>{props.amount}</p>
        </> : null
      }
      <FontAwesomeIcon style={{color: "#FFD43B",}} onClick={()=>props.addNum(props.good_id,props.amount)} icon={faCirclePlus} />
    </div>
  );
};

export default Counter;
