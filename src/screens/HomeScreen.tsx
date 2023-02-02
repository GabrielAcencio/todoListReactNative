import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react'
import { Text, TouchableHighlight, View } from 'react-native';
import ShowTask from '../components/ShowTask';
import { styles } from '../theme/appTheme';
import Task, { TAREA_LIST } from '../util/Task';

/* interface PropsHomeScreen extends  StackScreenProps<any,any>{
  taskList: Task[];
} */

interface PropsHomeScreen extends StackScreenProps<any, any> {
  taskList?: Task[]
};

interface StateHomeScreen extends PropsHomeScreen { };

const HomeScreen = (props: PropsHomeScreen) => {

  const [stateHomeScreen, setStateHomeScreen] = useState<StateHomeScreen>({ ...props, taskList: TAREA_LIST })
  return (

    <View style={[styles.container]}>
      <View>
        <Text style={[styles.title]}>
          task list
        </Text>

        {
          (props.route.params?.taskList ?? TAREA_LIST).map(
            (task: Task) => <ShowTask task={task} key={task.getId()} />
          )
        }
      </View>

      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate('AddTaskScreen');
          console.log('añadiendo nueva tarea');
          
        }}
        style = {[styles.newTask]}
      >
        <Text
          style={[styles.button_text]}
        >
          New task
        </Text>
      </TouchableHighlight>
    </View>


  )
}

export default HomeScreen;
