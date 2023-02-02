import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import Task, { TAREA_LIST } from '../util/Task';

interface PropsEditTaskScreen extends StackScreenProps<any, any> {
  task?: Task;
};

interface StateEditTaskScreen {
  title: string;
  description: string;
};

const EditTaskScreen = (props: PropsEditTaskScreen) => {
  const initialState: StateEditTaskScreen = {
    title: props.task?.getTitle() || '',
    description: props.task?.getDescription() || '',
  }
  const [stateEditTaskScreen, setStateEditTaskScreen] = useState<StateEditTaskScreen>(initialState);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        EDIT TASK
      </Text>
      <TextInput
        placeholder={TAREA_LIST[props.route.params?.id - 1]?.getTitle()}
        onChangeText={(text) => setStateEditTaskScreen({ ...stateEditTaskScreen, title: text })}
        style={styles.input}
      />

      <TextInput
        placeholder={TAREA_LIST[props.route.params?.id - 1]?.getDescription()}
        onChangeText={(text) => setStateEditTaskScreen({ ...stateEditTaskScreen, description: text })}
        multiline = {true}
        style={styles.input}
      />

      <TouchableHighlight
        onPress={() => {
          //TODO: te redirige a HomeScreen.
          TAREA_LIST[(props.task?.getId() ?? props.route.params?.id) - 1]?.setTitle(stateEditTaskScreen.title ?? props.task?.getTitle());
          TAREA_LIST[(props.task?.getId() ?? props.route.params?.id) - 1]?.setDescription(stateEditTaskScreen.description ?? props.task?.getTitle());
          props.navigation.navigate('HomeScreen', {
            taskList: TAREA_LIST
          })
          console.log(TAREA_LIST);
        }}
        style={[styles.button, { backgroundColor: '#0135A5', marginBottom: 10 }]}
      >
        <Text
          style={styles.textButton}
        >Save</Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate('HomeScreen', {
            taskList: TAREA_LIST
          })
        }}
        style={[styles.button, { backgroundColor: '#B116F6' }]}
      >
        <Text
          style={styles.textButton}
        >Cancel</Text>
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
    /* textAlign: 'center', */
    fontSize: 30,
    color: 'white',
    marginTop:15,
    marginBottom: 20,
  },

  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 2,
    backgroundColor: 'white',
    marginBottom: 20
  },
  button: {
    backgroundColor: 'skyblue',
    paddingTop: 18,
    paddingBottom: 15,
    textAlign: 'center',
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
  }
})

export default EditTaskScreen;
