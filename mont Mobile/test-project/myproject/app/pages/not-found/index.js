import React, { Component } from "react";
// 以CSS Modules方式引入404页样式
import style from "./index.css";
import logo from "./404.png";

// 导出404页组件
export default class NotFound extends Component {
    render(){
        return <div className={style.div}>
        <img className={style.img} src={logo}/>
        </div>
    }
}