import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import classes from "./AppCat.module.css";

const AppCat = (props) => {
  console.log(props)
  const {total_quantity, total_price} = props.catsData;
  const displayNum =total_quantity > 0 && total_quantity <= 99 ? total_quantity : '99+';
  return (
    <div className={classes.content}>
      <div className={classes.catIcon}>
        <FontAwesomeIcon style={{color: "#74C0FC",}} icon={faCartShopping}/>
        {total_quantity!==0 && <span className={classes.redNum}>{displayNum}</span>}
      </div>
      <div className={classes.amount}>x{total_price}</div>
      <div className={classes.settlement}>去结算</div>
    </div>
  );
};

export default AppCat;
