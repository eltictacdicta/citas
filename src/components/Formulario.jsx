import React from 'react'
import {
    Modal,
    Text,
    SafeAreaView,
    StyleSheet
} from 'react-native'

const Formulario = ({modalVisible}) => {
  return (
    <SafeAreaView 
      style={styles.contenido}
    >
      <Modal 
        animationType='slide'
        visible={modalVisible}
      >
         <Text
          style={styles.titulo}
         >Nueva{' '}
          <Text style={styles.tituloBold}>Cita</Text>
         </Text>
      </Modal>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  contenido:{
    backgroundColor:'#000',
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
  
})


export default Formulario