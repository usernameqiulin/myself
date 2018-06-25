import React, { Component } from "react";
import {Model} from "@bone/web";
//引入model模块(model将状态行为绑定到组件上,实现逻辑和组件相分离)
import style from "./index.css"; //引入样式文件

class MyModel extends  Model {
    static initialState = {
        count:0
    }
    add(){
        return{
            count: this.state.count+1
        }
    }
}
class My extends Component {//创建一个我的组件
static Model = MyModel;
    render(){//render函数的执行(创建组件)
         return <div>
             <p className={style.my}>内容:{this.props.count}</p>
                        <a className={style.my} onClick={()=>{this.actions.add()}}>add</a>
         </div>
}
}
export default My;
