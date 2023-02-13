import React from 'react'
import {
    Modal,
    Text,
    SafeAreaView
} from 'react-native'

const Formulario = ({modalVisible}) => {
  return (
    <SafeAreaView>
      <Modal
        animationType='slide'
        visible={modalVisible}
      >
         <Text>Desde Modal</Text>
      </Modal>
    </SafeAreaView>
    
  )
}

export default Formulario