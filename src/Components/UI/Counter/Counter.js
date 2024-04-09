import React, {useState} from 'react';
import classes from './Counter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlus,faCircleMinus} from "@fortawesome/free-solid-svg-icons";

const Counter = (props) => {
  const {data} = props
  console.log(props)

  const onAdd = ()=>{
    props.addNum(data);
  }
  const onSub = () => {
    props.reduceNum(data);
  }
  return (
    <div className={classes.content}>
      {data.amount && data.amount !== 0 ?
        <>
          <FontAwesomeIcon style={{color: "#FFD43B",}} onClick={onSub} icon={faCircleMinus} />
          <p className={classes.num}>{data.amount}</p>
        </> : null
      }
      <FontAwesomeIcon style={{color: "#FFD43B",}} onClick={onAdd} icon={faCirclePlus} />

    </div>
  );
};

export default Counter;
