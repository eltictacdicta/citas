import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  FlatList
} from 'react-native';


import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';

function App(): JSX.Element {

  const [modalVisible, setModalVisible] = useState(false)
  const [pacientes, setPacientes] = useState([])
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administracion de citas{' '}
      <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable
        onPress={() => {setModalVisible(!modalVisible)}}
        style={styles.btnNuevaCita}
      >
        <Text
        style={styles.btnTextoNuevaCita}
        >
          Nueva cita
        </Text>
      </Pressable>
      
      {pacientes.length === 0 ? 
        <Text style={styles.noPacientes}>No hay pacientes</Text>:
        <FlatList
          style={styles.listado}
          data={pacientes}
          keyExtractor={(item)=> item.id}
          renderItem={({item})=>{

            return(
              <Paciente item={item}/>
            )
          }}
        />
      }

      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pacientes = {pacientes}
        setPacientes={setPacientes}
      />

    </SafeAreaView>
  );

  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1
  },
  titulo: {
    textAlign: 'center',
    color: '#374151',
    fontSize: 30,
    fontWeight: '600'
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9'

  },
  btnNuevaCita: {
    backgroundColor:'#6D28D9',
    padding: 15,
    marginTop:30,
    marginLeft:20,
    marginRight:20,
    borderRadius:10
  },
  btnTextoNuevaCita:{
    textAlign:'center',
    color:'#FFF',
    fontSize:20,
    fontWeight:'900',
    textTransform: 'uppercase'
  },
  noPacientes:{
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600'
  },
  listado:{
    marginTop: 50,
    marginHorizontal: 30
  }
})


export default App;
