import React, { Component } from 'react';
import { View, Text ,TouchableOpacity} from 'react-native';
import *as actions from '../actions';
import {connect} from 'react-redux';

class ListItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };


  }

  
  renderDescription = () =>{
    console.log('render',this.props)
    const {item ,selectedId} = this.props;
    if(item.id == selectedId){
      return (
      <Text>{item.description}</Text>
      )
    }
    return null;
  }

  render() {
    console.log('props ',this.props);
    const {item,selectedId} = this.props;
  return (
    <TouchableOpacity onPress={()=> this.props.selectLibrary(item.id)}
     style={{padding : 20,borderBottomColor : 'black',borderBottomWidth : 2}}>
      
      <View>
      <Text> {item.title} </Text>
      {/* <Text>{item.description}</Text> */}
      </View>
      
     
      {this.renderDescription()}
      
    </TouchableOpacity>
  );
}

}
 

const mapStateToProps = state => {
  return {
    selectedId : state.selectedLibraryId
  };
};

const mapDispatchToProps = dispatch => {
  return{
    selectLibrary : id => dispatch({type : 'select_library',payload :id})

  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
 //actions
)(ListItem);

