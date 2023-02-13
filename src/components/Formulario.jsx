import React, { useState } from 'react'
import {
    Modal,
    Text,
    SafeAreaView,
    View,
    StyleSheet,
    TextInput,
    ScrollView
} from 'react-native'
import DatePicker from 'react-native-date-picker'

const Formulario = ({modalVisible}) => {
  const [paciente, setPaciente] = useState('')
  const [porpietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [fecha, setFecha] = useState(new Date())
  const [sintomas, setSintomas] = useState('')


  return (
    
      <Modal 
        animationType='slide'
        visible={modalVisible}
      >

        <SafeAreaView style={styles.contenido}>
          <ScrollView>
            <Text
            style={styles.titulo}
          >Nueva{' '}
              <Text style={styles.tituloBold}>Cita</Text>
            </Text>
            <View style={styles.campo}>
              <Text style={styles.label}>Nombre de Paciente</Text>
              <TextInput
                style={styles.input}
                placeholder='Nombre de paciente'
                placeholderTextColor={'#666'}
                value={paciente}
                onChangeText={setPaciente}

              />
            </View>
            <View style={styles.campo}>
              <Text style={styles.label}>Nombre de Propietario</Text>
              <TextInput
                style={styles.input}
                placeholder='Nombre de propietario'
                placeholderTextColor={'#666'}
                value={porpietario}
                onChangeText={setPropietario}
              />
            </View>
            <View style={styles.campo}>
              <Text style={styles.label}>Email Propietario</Text>
              <TextInput
                style={styles.input}
                placeholder='Email propietario'
                placeholderTextColor={'#666'}
                keyboardType='email-address'
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.campo}>
              <Text style={styles.label}>Teléfono Propietario</Text>
              <TextInput
                style={styles.input}
                placeholder='Teléfono propietario'
                placeholderTextColor={'#666'}
                keyboardType='phone-pad'
                value={telefono}
                onChangeText={setTelefono}
                maxLength={10}
              />
            </View>
            <View style={styles.campo}>
              <Text style={styles.label}>Fecha Alta</Text>
              <View style={styles.fechaContenedor}>
                <DatePicker
                  date={fecha}
                  locale='es'
                  onDateChange={(date) => setFecha(date)
                  }
                />
              </View>
              
            </View>
            <View style={styles.campo}>
              <Text style={styles.label}>Síntomas</Text>
              <TextInput
                style={[styles.input, styles.sintomasInput]}
                placeholder='Síntomas paciente'
                placeholderTextColor={'#666'}
                value={sintomas}
                onChangeText={setSintomas}
                multiline={true}
                numberOfLines={4}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
         
      </Modal>
    
  )
}

const styles = StyleSheet.create({
  contenido:{
    backgroundColor:'#6D28D9',
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
  },
  campo:{
    marginHorizontal: 30,
    marginBottom: 10
  },
  label:{
    color:'#FFF',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600'
  },
  input:{
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
  },
  sintomasInput:{
    height:100
  },
  fechaContenedor:{
    backgroundColor:'#FFF',
    borderRadius: 10
  }
  
})


export default Formulario