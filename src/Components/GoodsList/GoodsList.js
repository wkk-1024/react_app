import React from 'react';
import classes from './GoodsList.module.css';
import Counter from "../UI/Counter/Counter";

const GoodsList = (props) => {
  const {good_name, good_desc, good_price, good_num, good_id} = props.data
  return (
    <div className={classes.goodsBox}>
      <div className={'boxImg'}>
        <img style={{width: '200rem', height: '200rem'}}/>
      </div>
      <div className={classes.boxContent}>
        <p className={classes.boxTitle}>{good_name}</p>
        <p className={classes.boxDesc}>{good_desc}</p>
        <div className={classes.PriceBox}>
          <p className={classes.price}>{good_price}</p>
          <span className={classes.num}><Counter reduceNum={props.reduceNum} addNum={props.addNum}
                                                 amount={good_num} good_id={good_id}
                                                 good_num={good_num}/></span>
        </div>
      </div>
    </div>
  );
};

export default GoodsList;
