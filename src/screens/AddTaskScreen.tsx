import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import Task, { TAREA_LIST } from '../util/Task';

interface PropsAddTaskScreen extends  StackScreenProps<any,any>{}; 

interface StateAddTaskScreen{
  title: string,
  description: string
}

const AddTaskScreen = (props: PropsAddTaskScreen) => {

  const initialState: StateAddTaskScreen = { title: '', description: '' };
  const [stateAddTaskScreen, setStateAddTaskScreen] = useState<StateAddTaskScreen>(initialState)
  return (
    <View style = {styles.container}>

      <Text style = {styles.title}>
        NEW TASK
      </Text>
      <TextInput
        placeholder='title'
        onChangeText={(title) => {
          setStateAddTaskScreen({ ...stateAddTaskScreen, title })
        }}

        style={styles.input}
      />

      <TextInput
        placeholder='description'
        onChangeText={(description) => {
          setStateAddTaskScreen({ ...stateAddTaskScreen, description })
        }}
        multiline = {true}
        style={styles.input}
      />

      <TouchableHighlight
        onPress={() => {
          TAREA_LIST.push(new Task(stateAddTaskScreen.title, stateAddTaskScreen.description));
          props.navigation.navigate('HomeScreen',{
            taskList: TAREA_LIST
          });
          console.log(TAREA_LIST);
        }}
        style = {[styles.button, {backgroundColor: '#0135A5', marginBottom:10}]}
      >
        <Text
        style= {styles.textButton}>
          Add
        </Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={()=>{
          props.navigation.navigate('HomeScreen', {
            taskList: TAREA_LIST
          });
        }}
        style = {[styles.button,{backgroundColor:'#B116F6'}]}
        
      >
        <Text
        style= {styles.textButton}>
          Cancel
        </Text>
      </TouchableHighlight>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    marginTop: 0,
    paddingLeft: 15,
    paddingRight: 15,
  },

  title: {
    // textAlign : 'center',
    color: 'white',
    fontSize: 30,
    marginTop: 15,
    marginBottom: 20,
  },

  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 2,
    backgroundColor: 'white',
    marginBottom: 20
  },
  button:{
    backgroundColor: 'skyblue',
    paddingTop: 18,
    paddingBottom: 15,
    textAlign: 'center',
  },
  textButton : {
    textAlign: 'center',
    color: 'white',
  }
})
export default AddTaskScreen;
