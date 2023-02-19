import React, { useState, useEffect } from 'react'
import {
    Modal,
    Text,
    SafeAreaView,
    View,
    StyleSheet,
    TextInput,
    Pressable,
    ScrollView,
    Alert
} from 'react-native'
import DatePicker from 'react-native-date-picker'

const Formulario = ({cerrarModal, modalVisible, setPacientes, pacientes, pacienteObj, setPacienteApp}) => {
  
  const [id, setId] = useState('')
  const [paciente, setPaciente] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [fecha, setFecha] = useState(new Date())
  const [sintomas, setSintomas] = useState('')

  useEffect(()=>{
    
    console.log(pacienteObj)
    if(Object.keys(pacienteObj).length >0 ){
      console.log('Si hay algo ',pacienteObj.propietario)
      setId(pacienteObj.id)
      setPaciente(pacienteObj.paciente)
      setPropietario(pacienteObj.propietario)
      setEmail(pacienteObj.email)
      setTelefono(pacienteObj.telefono)
      setFecha(pacienteObj.fecha)
      setSintomas(pacienteObj.sintomas)
    }
  }, [pacienteObj])

  const handleCita = () =>{
    //validar
    if([paciente, propietario, email, fecha, sintomas].includes('')){
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios'
      )
      return //este return rompe el flujo

    

    }
    const nuevoPaciente ={
      paciente,
      propietario,
      email,
      telefono,
      fecha,
      sintomas
    }

      //Revisar si es un registro nuevo o edición
    if(id){
      //editando
      nuevoPaciente.id= id
      const pacientesActualizados = pacientes.map( pacienteState => 
        pacienteState.id===nuevoPaciente.id ? nuevoPaciente : pacienteState )
      setPacientes(pacientesActualizados)
      setPacienteApp({})

    }else{
      //añadiendo
      nuevoPaciente.id = Date.now()
      setPacientes([...pacientes,nuevoPaciente])
    }


    

    
    cerrarModal()
    setId('')
    setPaciente('')
    setPropietario('')
    setEmail('')
    setTelefono('')
    setFecha(new Date())
    setSintomas('')
  }


  return (
    
      <Modal 
        animationType='slide'
        visible={modalVisible}
      >

        <SafeAreaView style={styles.contenido}>
          <ScrollView>
            <Text
            style={styles.titulo}
          >{pacienteObj.id ? 'Editar' : 'Nueva'}{' '}
              <Text style={styles.tituloBold}>Cita</Text>
            </Text>

            <Pressable 
              style={styles.btnCancelar}
              onLongPress={()=> {
                
                cerrarModal()
                setPacienteApp({})
                setId('')
                setPaciente('')
                setPropietario('')
                setEmail('')
                setTelefono('')
                setFecha(new Date())
                setSintomas('')
              }}
            >
              <Text style={styles.btnCancelarTexto}>
                X Cancelar
              </Text>
              
            </Pressable>


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
                value={propietario}
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
            <Pressable 
              style={styles.btnNuevaCita}
              onPress={handleCita}
            >
              <Text style={styles.btnNuevaCitaTexto}>
                  {pacienteObj.id ? 'Editar' : 'Agregar'} paciente
              </Text>
              
            </Pressable>
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
  btnCancelar:{
    marginVertical: 30,
    backgroundColor: '#5827A4',
    marginHorizontal: 30,
    padding:20,
    borderRadius: 10


  },
  btnCancelarTexto:{
    color:'#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase'
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
  },
  btnNuevaCita:{
    marginVertical: 50,
    backgroundColor: '#F59E0B',
    marginHorizontal: 30,
    padding:15,
    borderRadius: 10


  },
  btnNuevaCitaTexto:{
    color:'#5827A4',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase'
  }
  
})


export default Formulario