import React, { Component } from "react";
import style from "./index.css"; //引入样式文件
import LOGO  from "./LOGO.png";
//layout组件
class MyLayout extends Component {
    render (){
        return <div>
            <h1>title</h1>
            { this.props.children }
        </div>
    }
}
//page
class Life extends Component {//创建一个我的组件
    render(){//render函数的执行(创建组件)
        return <div className="container">
            <p className={ style.life }>Hellow-Bone-life-cicle</p>
        </div>
    }
}
export default Life;