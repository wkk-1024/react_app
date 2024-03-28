import React from 'react';
import classes from './AppSearch.module.css'
const AppSearch = (props) => {
  return (
    <div className={classes.content}>
      <input className={classes.inputClass} placeholder={'请输入关键字'} type='search'/>
    </div>
  );
};

export default AppSearch;
