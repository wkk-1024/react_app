import React, {useEffect, useState} from 'react';
import './App.css'
import AppSearch from "./Components/AppSearch/AppSearch";
import GoodsList from "./Components/GoodsList/GoodsList";
import Counter from "./Components/UI/Counter/Counter";
import AppCat from "./Components/AppCat/AppCat";


const catData = {
  "cart_items": [],
  "total_quantity": 0,
  "total_price": 0
}
const App = (props) => {

  // 保存数据
  const [goodsData, setGoodsData] = useState([
    {
      "good_id": 1,
      "good_name": "Apple",
      "good_desc": "A fruit",
      "good_price": 1
    },
    {
      "good_id": 2,
      "good_name": "Banana",
      "good_desc": "Another fruit",
      "good_price": 2
    },
    {
      "good_id": 3,
      "good_name": "Carrot",
      "good_desc": "A vegetable",
      "good_price": 3
    }
  ]);
  console.log(goodsData)
  //购物车数据
  const [catsData, setCatsData] = useState(catData)

  //修改商品数量
  const addNum = (data) => {
    //浅拷贝修改数据后主数据也会随之修改
    let newCat = {...catsData}

    //判断是否第一次加入
    if (newCat.cart_items.indexOf(data) === -1) {
      //设置数量
      data.amount = 1

      newCat.cart_items.push(data)
    } else {
      data.amount += 1
    }

    newCat.total_quantity += 1
    newCat.total_price += data.good_price

    setCatsData(newCat)
  }

  const reduceNum = (data) => {
    //浅拷贝修改数据后主数据也会随之修改
    let newCat = {...catsData}

    // 判断是否是最后一次减少
    if (data.amount === 1){
      newCat.cart_items.splice(newCat.cart_items.indexOf(data),1);
      data.amount = 0
    }else {
      data.amount -= 1
    }

    newCat.total_quantity -= 1
    newCat.total_price -= data.good_price

    setCatsData(newCat)
  }

  //处理数据
  const goodsList = goodsData.map(item => {
    return <GoodsList addNum={addNum} reduceNum={reduceNum} data={item} key={item.good_id}/>
  })
  return (
    <div className={'app'}>
      <AppSearch/>
      {goodsList}
      <AppCat catsData={catsData}/>
    </div>
  );
};

export default App;
