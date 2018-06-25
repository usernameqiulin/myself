import { createApp } from "@bone/web";
import React, { Component } from "react";
// 引入各个页面组件
import Home from "./app/pages/home";
import List from "./app/pages/list";
import NotFound from "./app/pages/not-found";
class MyLayout  extends Component{
    render(){
        return <div>
                <h1>这是放在组件最外层Layout现实的内容!</h1>
                {this.props.children}
        </div>
    }
}
// 创建App实例
export default createApp({
    // 设置应用ID
    appName: "sd",
    layout:MyLayout,
    // 配置路由信息
    router: {
        routes: [{
            // 页面路径
            path: "/",
            // 页面组件
            page: Home
        },
        {
            path:"/list",
            page:List
        }
    ],
        // routes中路由无法匹配时显示的404页面
        notFound: NotFound
    }
})