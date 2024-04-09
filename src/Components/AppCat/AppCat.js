import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import classes from "./AppCat.module.css";

const AppCat = (props) => {
  return (
    <div className={classes.content}>
      <div className={classes.catIcon}>
        <FontAwesomeIcon style={{color: "#74C0FC",}} icon={faCartShopping}/>
        <span className={classes.redNum}>1</span>
      </div>
      <div className={classes.amount}>x20</div>
      <div className={classes.settlement}>去结算</div>
    </div>
  );
};

export default AppCat;
