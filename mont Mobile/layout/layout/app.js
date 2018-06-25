import { createApp } from "@bone/web";
import react, {  Component  } from "react";
import style from "./app/pages/home/index.css";
// 引入各个页面组件
import Home from "./app/pages/home";
import NotFound from "./app/pages/not-found";
//创建Lyout组件
class MyLayout extends Component {
    render(){
        return <div>
            <h1 className={style.welcome}>Layout---div</h1>
            {this.props.children}
            {this.pathName}
        </div>
    }
} 
// 创建App实例
export default createApp({
    // 设置应用ID
    appName: "layout",
    layout: MyLayout,
    // 配置路由信息
    router: {
        routes: [{
            // 页面路径
            path: "/",
            // 页面组件
            page: Home
        }],
        // routes中路由无法匹配时显示的404页面
        notFound: NotFound
    }
})