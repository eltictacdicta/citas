import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable
} from 'react-native';


import Formulario from './src/components/Formulario';

function App(): JSX.Element {

  const [modalVisible, setModalVisible] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administracion de citas{' '}
      <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable
        onPress={() => {setModalVisible(true)}}
        style={styles.btnNuevaCita}
      >
        <Text
        style={styles.btnTextoNuevaCita}
        >
          Nueva cita
        </Text>
      </Pressable>
      
      <Formulario
        modalVisible={modalVisible}
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
  }
})


export default App;
