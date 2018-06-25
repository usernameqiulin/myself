import React from 'react';
import { View, StyleSheet } from 'react-native';
import Home from '../view/Home';
import { Navbar } from '@bone/bone-mobile-ui';
import HomeModel from '../model/HomeModel';

class HomePage extends Bone.Page {
  constructor(...args) {
    super(...args);

    this.onBackButtonPress = this.onBackButtonPress.bind(this);
    this.onMoreButtonPress = this.onMoreButtonPress.bind(this);
  }
  componentWillMount(){
  //通过actions调用 model 里定义的actons
  this.actions.add(7)
}
  render() {
    //modelstate 会自动映射成组件的 props
    const { value } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Navbar
          style={navbarStyleOptions}
          // 设置左按钮为组件
          leftButtonContent='返回'
          titleContent='首页'
          // 设置右按钮为文字
          rightButtonContent='更多'
          onLeftButtonPress={this.onBackButtonPress}
          onRightButtonPress={this.onMoreButtonPress}
        />
        <Home value={value} style={{ flex: 1 }}/>
      </View>
    );
  }

  onBackButtonPress() {
    console.log('onBackButtonPress');
    Bone.navigation.pop();
  }

  onMoreButtonPress() {
    Bone.navigation.push('/more');
  }
}

// 设置导航栏的样式
const navbarStyleOptions = {
  style: { backgroundColor: '#1fc8a2' },
  rightButtonStyle: { color: '#fff' },
  titleStyle: { color: '#fff' },
};
export default Bone.connect(HomePage, HomeModel);
