import Bone from '@bone/bone-mobile';

export default  class HomeModel extends Bone.Model {
  // 初始 state
  static initialState = {
    value: 1
  };

  // actions 数据处理函数
  add(num) {
    return {
      value: this.state.value + num
    };
    alert(num);
  }

  // 异步action
//   async getList(id){
//       return {
//           value: await fetch("xxx/list", {
//               id
//           })
//       }
//   }
};