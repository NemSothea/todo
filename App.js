//import some stuff
import React from 'react';
import {View,Text,Button,TextInput} from 'react-native';

//create some stuff
class App extends React.Component {
  state = {
    text:"",
    todo:[]
  }
  addTodo = () => {
    var newToDo = this.state.text;
    var arr = this.state.todo;
    arr.push(newToDo);
    this.setState({todo:arr,text:""});
  }
  deleteToDo = (t) => {

    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos,1)
    this.setState({todo:arr});
  }
  renderToDos = () => {
    return this.state.todo.map(t=>{
      return(
        <Text key={t} 
        onPress={()=>{this.deleteToDo(t)}}>
        {t}</Text>
      )
    })
  }
  render(){
    return(
      <View style={styles.wholeStyle}>
      <View style={styles.viewStyle}>
          <Text style={styles.headerStyle}>Notes</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(text)=>this.setState({text})}
            value={this.state.text}
          />
          <Button title="Add ToDo" color='green' onPress={this.addTodo}/>
          {this.renderToDos()}
      </View>
      </View>
    )
  }
}
const styles = {
  wholeStyle:{
    flex:1,
    backgroundColor:'#E0F7FA'
  },
  headerStyle:{
    fontSize:30,
    marginTop:10,
    color:'green',
    fontWeight:'bold'
  },
  viewStyle:{
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
    marginTop:30
  },
  inputStyle: {
    height:30,
    borderColor:'grey',
    borderWidth:1,
    marginLeft:10,
    marginRight:10,
    borderRadius:5,
    width:300,
    fontSize:16
  },
  buttonStyle: {
    color:'#4DB6AC'
  }
}

//export some stuff
export default App;