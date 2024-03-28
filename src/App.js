import React, {useState} from 'react';
import './App.css'
import AppSearch from "./Components/AppSearch/AppSearch";
import GoodsList from "./Components/GoodsList/GoodsList";


const App = (props) => {

  // 保存数据
  const goodsData = [
    {
      "good_id": 1,
      "good_name": "Apple",
      "good_desc": "A fruit",
      "good_num": 10,
      "good_price": 1.2
    },
    {
      "good_id": 2,
      "good_name": "Banana",
      "good_desc": "Another fruit",
      "good_num": 5,
      "good_price": 0.8
    },
    {
      "good_id": 3,
      "good_name": "Carrot",
      "good_desc": "A vegetable",
      "good_num": 15,
      "good_price": 2.0
    }
  ];

  //处理数据
  const goodsList = goodsData.map(item=>{
    return <GoodsList data={item} key={item.good_id}/>
  })
  return (
    <div className={'app'}>
      <AppSearch/>
      {goodsList}
    </div>
  );
};

export default App;
