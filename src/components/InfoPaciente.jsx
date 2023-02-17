import React from 'react'
import {Text, SafeAreaView, Pressable, View, StyleSheet} from 'react-native'

const InfoPaciente = ({paciente, setModalPaciente}) => {
  return (
    <SafeAreaView style={styles.contendedor}>
      <View>
        <Pressable
          onLongPress={() => setModalPaciente(false)}
        >
          <Text>Cerrar</Text>
        </Pressable>
      </View>
      <Text style={styles.titulo}>Información <Text style={styles.tituloBold}>Paciente</Text></Text>
      <Text>{paciente.paciente}</Text>
    </SafeAreaView>
    
  )
}


const styles = StyleSheet.create({
  contendedor:{
    backgroundColor: '#F59E0B',
    flex:1
  },
  titulo:{
    fontSize:30,
    fontWeight:'600',
    textAlign:'center',
    marginTop:30,
    color: '#FFF'
  },
  tituloBold:{
    fontWeight:'900'
  }
}
)

export default InfoPaciente