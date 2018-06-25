import React, { Component } from "react";//引入模块
//引入页面样式
import style from "./index.css";

class List extends Component{
  render(){
    return <div>
      <p className={style.list}>list</p>
    </div>
  }
}
export default List;