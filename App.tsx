import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet
} from 'react-native';

function App(): JSX.Element {
  const nombre="Javier Trujillo"
  return (
    <SafeAreaView>
      <Text style={styles.titulo}>Administracion de citas{' '}
      <Text>Veterinaria</Text>
      </Text>
    </SafeAreaView>
  );

  
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    color: '#374151',
    fontSize: 30,
    fontWeight: '600'
  }
})


export default App;
