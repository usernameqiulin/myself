import React, {Component} from "react";
import {  Model } from " @bon/web";

class MyModel extends Model{
  static initialState ={
    count:0
  }
  add(){
    return{
      count:this.state.count+1
    }
  }
}
class MyComponent extends Component {
  static Model = MyModel;
  render(){
    return
      <div>
        <p>{ this.props.count }</p>
        <a onClick={()=>{ this.actions.add()}}>add</a>
      </div>
    
  }
  
}
import {  createApp  } from "@bone/web";
createApp({
  layout:MyLayout,
  router:{
    routers:[{
      path:"/",
      page:Life
    }]
  }
})
export default MyComponent;