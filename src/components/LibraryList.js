 import React, { Component } from 'react';
 import { View, Text,FlatList } from 'react-native';
 import {connect} from 'react-redux';
import ListItem from './ListItem';
 
class LibraryList extends Component {
   constructor(props) {
     super(props);
     this.state = {
     };
 
    
   }

   renderItem = ({item}) => {
    return <ListItem item ={item}/> 
    
}

 
   render() {
       console.log('Props librarylist ',this.props.data);
       const {data} = this.props;
       return (
       <View style = {{flex :1,marginTop : 70}}>
         <FlatList data ={data} renderItem = {this.renderItem}/>
       </View>
     );
   }
 }
 
 const maapStateToProps = (state) => {
     return {
        data: state.libraries,
     }
 }
 
 export default  connect(maapStateToProps)(LibraryList);