import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Home extends Component {
  state = {
    result: {}
  }

  render() {
    const { result } = this.state;
    return (
      <View style={styles.home}>
        <Text> 欢迎使用 Bone框架!!! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
