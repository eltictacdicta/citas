import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Button
} from 'react-native';

function App(): JSX.Element {
  const nombre="Javier Trujillo"
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administracion de citas{' '}
      <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Button 
      title='Nueva cita'
      onPress={() => {
         console.log('Presionastes el botón')
      }

      }
      ></Button>
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

  }
})


export default App;
