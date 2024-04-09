import React, {useState} from 'react';
import './App.css'
import AppSearch from "./Components/AppSearch/AppSearch";
import GoodsList from "./Components/GoodsList/GoodsList";
import Counter from "./Components/UI/Counter/Counter";
import AppCat from "./Components/AppCat/AppCat";


const catData = {
  "status": "success",
  "message": "购物车数据获取成功",
  "data": {
    "cart_items": [
      {
        "id": 1,
        "good_id": 1,
        "good_name": "商品1",
        "good_price": 100,
        "good_desc": 2,
        "total_price": 200
      },
      {
        "id": 2,
        "good_id": 1,
        "good_name": "商品2",
        "good_price": 100,
        "good_desc": 2,
        "total_price": 200
      },
    ],
    "total_quantity": 3,
    "total_price": 400
  }
}
const App = (props) => {

  // 保存数据
  const [goodsData, setGoodsData] = useState([
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
  ]);
  //修改商品数量
  const addNum = (id, num) => {
    console.log(id, num)
    setGoodsData(prevState => {
      return prevState.map(item => {
        if (item.good_id === id) {
          item.good_num = num + 1;
        }
        return item
      });
    });
  }

  const reduceNum = (id, num) => {
    setGoodsData(prevState => {
      return prevState.map(item => {
        if (item.good_id === id) {
          item.good_num = num - 1;
        }
        return item
      });
    });
  }

  //购物车数据
  const [catsData,setCatsData] = useState(catData)

  //处理数据
  const goodsList = goodsData.map(item => {
    return <GoodsList addNum={addNum} reduceNum={reduceNum} data={item} key={item.good_id}/>
  })
  return (
    <div className={'app'}>
      <AppSearch/>
      {goodsList}
      <AppCat/>
    </div>
  );
};

export default App;
