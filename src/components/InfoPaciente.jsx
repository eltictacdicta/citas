import React from 'react'
import {Text,SafeAreaView} from 'react-native'

const InfoPaciente = ({paciente}) => {
  return (
    <SafeAreaView>
      <Text>ModalPaciente</Text>
      <Text>{paciente.paciente}</Text>
    </SafeAreaView>
    
  )
}

export default InfoPaciente