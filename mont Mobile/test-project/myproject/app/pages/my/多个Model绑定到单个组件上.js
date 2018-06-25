import React,{ Component} from "react";
import {Model} from "@bone/web";
 class ModelA extends Model{
    static initialState ={
       count1:1 ,
       count2:2
    }
    add1(){
      return{
        count:this.state.count +1 
      }
    }
    add2(){
      return{
        count:this.state.count +1 
      }
    }
 }
 class ModelB extends Model{
    static initialState ={
       count1:1 ,
       count2:2
    }
    add2(){
      return{
        count:this.state.count +100
      }
    }
    add3(){
      return{
        count:this.state.count +100 
      }
    }
 }
 class My extends Component {
    static MOdel  = [ModelA,MOdelB];
    render(){
      return  <ul>
             <li>
               count1:{this.props.count1}
               <a onClick={ ()=>{this.actions.add1()}}></a>
             </li>
             <li>
               count1:{this.props.count2}
               <a onClick={ ()=>{this.actions.add2()}}></a>
             </li>
             <li>
               count1:{this.props.count3}
               <a onClick={ ()=>{this.actions.add3()}}></a>
             </li>
          </ul>
    }
 }
