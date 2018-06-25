import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Navbar } from '@bone/bone-mobile-ui';
import HomeModel from '../model/HomeModel';


class MorePage extends Bone.Page {
  constructor(...args) {
    super(...args);

    this.onBackButtonPress = this.onBackButtonPress.bind(this);
  }
  componentWillMount(){
    //通过actions调用 model 里定义的actons
    this.actions.add(9)
  }
  render() {
    const { value } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Navbar
          style={navbarStyleOptions}
          leftButtonContent='返回'
          titleContent='查看更多'
          onLeftButtonPress={this.onBackButtonPress}
        />
        <View style={{ flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center' }}
        >
          <Text>公用数据为:{value}</Text>
        </View>
      </View>
    );
  }

  onBackButtonPress() {
    console.log('onBackButtonPress');
    Bone.navigation.pop();
  }
}

// 设置导航栏的样式
const navbarStyleOptions = {
  style: { backgroundColor: '#1fc8a2' },
};

export default Bone.connect(MorePage, HomeModel);
