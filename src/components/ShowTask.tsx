import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { styles } from '../theme/appTheme'
import Task, { TAREA_LIST } from '../util/Task'


interface PropsShowTask {
  task: Task
  visible?: boolean
}

interface StateShowTask extends PropsShowTask { }


const ShowTask = (props: PropsShowTask) => {

  const [stateShowTask, setStateShowTask] = useState<StateShowTask>({ ...props, visible: true });
  const navigation = useNavigation();

  return (
    <View
      style={[{ display: stateShowTask.visible ? 'flex' : 'none' }, styles.task]}
    >
      <View>
        <Text>
          {props.task.getTitle()}
        </Text>

      </View>

      <View style={{justifyContent: 'flex-end', flexDirection:'row'}}>
        <TouchableHighlight
          onPress={() => navigation.navigate('EditTaskScreen', {
            id: stateShowTask.task.getId()
          })}

          style={[styles.button, styles.editar]}
        >
          <Text style={[styles.button_text]}>
            Edit
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => {
            setStateShowTask({ ...stateShowTask, visible: false });
            TAREA_LIST.splice(stateShowTask.task.getId() - 1, 1);
            console.log(TAREA_LIST);

          }}

          style={[styles.button, styles.eliminar]}
        >
          <Text style={[styles.button_text]}>
            Delete
          </Text>
        </TouchableHighlight>
      </View>

    </View>
  )
}

export default ShowTask;
