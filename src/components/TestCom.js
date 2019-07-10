import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';

class TestCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      console.log('Props tescom ',this.props);
    return (
      <View>
        <Text> TestCom </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) =>{

    return{
        data : state.libraries,
        testData : state.test,
    }

}

export default connect(mapStateToProps)(TestCom);
