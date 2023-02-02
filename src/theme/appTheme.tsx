import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98DBEE',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  title: {
    textTransform:'uppercase',
    marginLeft: 20,
    fontSize: 30,
    color: 'white',
    marginBottom:40,
    marginTop:15
  },

  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
    marginHorizontal:23,
    borderWidth: 0,
    paddingVertical:2,
    borderRadius: 5,
    backgroundColor: '#98DBEE'


  },
  editar: {
    backgroundColor: '#0135A5'
  },
  eliminar: {
    backgroundColor: '#B116F6'
  },
  button: {
    borderWidth: 0,
    borderRadius: 7,
    paddingHorizontal: 15,
    paddingVertical:4,
    marginRight:3
  },
  button_text :{
    color: '#FFFFFF',
    textAlign: 'center'
  },

  newTask : {
    backgroundColor: '#0135A5',
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal:150,
    marginBottom: 40,
    width: 120,
    padding: 5,
    borderRadius: 20
  }
})

