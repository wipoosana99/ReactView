import React from 'react';
import {Text,View} from 'react-native';

export default class ViewBox extends React.Component{
  render(){
    return(
      <View style={{
        flexDirection:"row",
        height:100,
        padding:20,
      }}>
        <View style={{backgroundColor:"#DB7093",flex:0.3}}>
          <Text style={{color:"#FFFAFA",textAlign:"center"}}>PaleVioletRed</Text>
        </View>
        <View style={{backgroundColor:"#AFEEEE",flex:0.5}}>
          <Text style={{color:"#FFFAFA",textAlign:"center"}}>PaleTurquoise</Text>
        </View>
        <Text>Hello World</Text>
      </View>
    )
  }
}