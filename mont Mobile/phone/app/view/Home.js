import React, { Component } from 'react';
import { StyleSheet, View, Text,Switch } from 'react-native';
import { Navbar } from '@bone/bone-mobile-ui';


export default class Home extends Component {
  state = {
    result: {}
  }

  render() {

    const { result } = this.state;
     alert(this.props.name);
    return (
      <View style={styles.home}>
        <Text style={{color:'#f00'}}> Hello bone!热电厂人员太多人头人太多要让他 </Text>
          
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
