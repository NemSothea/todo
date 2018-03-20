//import some stuff
import React from 'react';
import {View,Text,Button,TextInput} from 'react-native';

//create some stuff
class App extends React.Component {
  state = {
    words:"here your words"
  }
  render(){
    return(
      <View style={styles.viewStyle}>
          <Text>Hello toDo App, Types somethings</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(text)=>this.setState({words:text})}
          />
          <Button title="ToDo"/>
          <Text>{this.state.words}</Text>
      </View>
    )
  }
}
const styles = {
  viewStyle:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputStyle: {
    height:30,
    borderColor:'grey',
    borderWidth:1,
    width:200,
    borderRadius:5,
    fontSize:16
  }
}

//export some stuff
export default App;