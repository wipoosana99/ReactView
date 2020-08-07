import React from 'react';
import {Text,View} from 'react-native';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      //this is our initial data
      message:'Hello World',
      dp:'How You Like That',
    }
  }
render(){
  return(
    <View>
      <Text>{this.state.message}</Text>
      <Text>{this.state.dp}</Text>
      <Text>I Love My Mather</Text>
      </View>
    )
  }
}
export default App;