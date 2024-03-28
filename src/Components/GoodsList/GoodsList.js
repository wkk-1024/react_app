import React from 'react';
import classes from './GoodsList.module.css';

const GoodsList = (props) => {
  console.log(props.data)
  return (
    <div className={classes.goodsBox}>
      <div className={'boxImg'}>
        <img style={{width:'200rem',height:'200rem'}}/>
      </div>
      <div className={classes.boxContent}>
          <p className={classes.boxTitle}>{props.data.good_name}</p>
          <p className={classes.boxDesc}>{props.data.good_desc}</p>
        <div className={classes.PriceBox}>
          <p className={classes.price}>{props.data.good_price}</p>
          <p className={classes.num}>{props.data.good_num}</p>
        </div>
      </div>
    </div>
  );
};

export default GoodsList;
