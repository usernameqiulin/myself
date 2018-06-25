import React, {Component} from "react";
import {Model} from "@bone/web";
class ModelA extends Model {
    static initialState = {
        count1: 1,
        count2: 2
    }
    onInit(){
        console.log("MOdel已被初始化");
    }
    onUnconnect(){
        console.log("Model与store(数据)断开连接");
    }
    onWarn(){
        console.log("执行过程中的警告信息");
    }
    onError(){
        consoel.log("当action执行过程红的一些警告信息")
    }

    // --------------------------------------------------------------
    onConnect(){
        console.log("Model与store(数据)已经连接了")
    }
    add1() {
        return {
            count1: this.state.count1 + 1
        }
    }
    add2() {
        return {
            count2: this.state.count2 + 1
        }
    }
}
class ModelB extends Model {
    static initialState = {
        count2: 20,
        count3: 30
    }
    add2() {
        return {
            count2: this.state.count2 + 100
        }
    }
    add3() {
        return {
            count3: this.state.count3 + 5
        }
    }
}
class My extends Component {
    static Model = [ModelA, ModelB];
    render() {
        console.log(this.location)
        return <ul ><li >
            count1: {this.props.count1} 
            <a onClick = {() => {this.actions.add1()}} >add1 </a> </li> <li >
            count2: {this.props.count2} 
            <a onClick = {() => {this.actions.add2()}} > add2</a> </li> <li >
            count3: {this.props.count3} 
            <a onClick = {() => {this.actions.add3()}} > add3</a> </li> </ul>
    }
}
export default My;