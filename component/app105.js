import React from 'react';
import {Text,View} from 'react-native';

const ViewBox=()=>{
  return(
    <View style={{
      flexDirection:"row",
      height:100,
      padding:20,

    }}>
      <View style={{backgroundColor:"#4169E1",flex:0.3}}></View>
      <View style={{backgroundColor:"#FF0000",flex:0.5}}></View>
      <Text>Hello World</Text>
    </View>
  )
}
export default ViewBox;