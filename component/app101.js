import React from 'react';
import {Text,View,StyleSheet,Linking} from 'react-native';
export default function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.myContent}
      onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=62BrXWxljL8')}>I Love My Cat</Text>

      <Text style={styles.myContent}
      onPress={()=>Linking.openURL('https://www.pinterest.com/cookygang/love-me-love-my-cat/')}
      >I Love My Cat</Text>

  <Text style={{color:'#00BFF'}}onPress={()=>Linking.openURL('http://google.com')}>Google</Text>
    </View>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FF7F50',
  },
  myContent:{
    fontSize:20,
    color:'#696969',
  }
});