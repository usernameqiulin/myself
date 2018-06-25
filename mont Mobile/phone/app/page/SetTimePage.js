import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Home from '../view/Home';
import {
  Navbar
} from '@bone/bone-mobile-ui';

class SetTime extends Bone.Page {
  constructor(...args) {
    super(...args);

    this.onBackButtonPress = this.onBackButtonPress.bind(this);
    this.onMoreButtonPress = this.onMoreButtonPress.bind(this);
  }

  render() {
    return ( <
      View style = {
        {
          flex: 1
        }
      } >
      <
      Navbar style = {
        navbarStyleOptions
      }
      // 设置左按钮为组件
      leftButtonContent = '<'
      titleContent = '设定时间'
      // 设置右按钮为文字
      rightButtonContent = '下一步'
      onLeftButtonPress = {
        this.onBackButtonPress
      }
      onRightButtonPress = {
        this.onMoreButtonPress
      }
      /> <
      Home style = {
        {
          flex: 1
        }
      }
      /> </View>
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
  style: {
    backgroundColor: '#000'
  },
  rightButtonStyle: {
    color: '#ff0'
  },
  titleStyle: {
    color: '#f00'
  },
};
export default SetTime;