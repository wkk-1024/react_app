import React from 'react';
import classes from './App.module.css'


const App = (props) => {

  const [showBgColor, setShowBgColor] = React.useState(false);

  const showBgColorHandler = () => {
    setShowBgColor(!showBgColor)
  }
  return (
    <div>
      <h1 className={`${classes.h1} ${showBgColor? classes.bgColor : ''}`}>Hello, world!</h1>
      <button onClick={showBgColorHandler}>切换背景颜色</button>
    </div>
  );
};

export default App;
