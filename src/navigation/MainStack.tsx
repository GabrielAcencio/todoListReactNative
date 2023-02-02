import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import ShowTask from '../components/ShowTask';
import AddTaskScreen from '../screens/AddTaskScreen';
import EditTaskScreen from '../screens/EditTaskScreen';
import HomeScreen from '../screens/HomeScreen';
import { TAREA_LIST } from '../util/Task';

const Stack = createStackNavigator();

const MainStack = () => {

  return (
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen 
            name='HomeScreen' 
            component={HomeScreen} 
            options={{headerShown: false}}/>

          <Stack.Screen 
            name='AddTaskScreen' 
            component={AddTaskScreen} 
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name='EditTaskScreen'
            component={EditTaskScreen}
            options={{headerShown: false}}
          />

        </Stack.Navigator>
      </NavigationContainer>

  )
}

export default MainStack;
