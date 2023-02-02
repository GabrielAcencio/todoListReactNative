import 'react-native-gesture-handler';

import React from 'react'
import { Text, View } from 'react-native';
import ShowTask from './src/components/ShowTask';
import MainStack from './src/navigation/MainStack';
import AddTaskScreen from './src/screens/AddTaskScreen';
import EditTaskScreen from './src/screens/EditTaskScreen';
import HomeScreen from './src/screens/HomeScreen';
import { TAREA_LIST } from './src/util/Task';



const App = () => {

  return (
      <MainStack/>
  )
}

export default App;
