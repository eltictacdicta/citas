import React from 'react'
import {Text, SafeAreaView, Pressable, View, StyleSheet} from 'react-native'
import { formatearFecha } from '../helpers'
const InfoPaciente = ({paciente, setModalPaciente, setPaciente}) => {
  return (
    <SafeAreaView style={styles.contendedor}>
      <Text style={styles.titulo}>Información <Text style={styles.tituloBold}>Paciente</Text></Text>
      <View>
        <Pressable
          style={styles.btnCerrar}
          onLongPress={() => {
            setModalPaciente(false)
            setPaciente({})
          }}
        >
          <Text 
            style={styles.btnCerrarTexto}
          >X Cerrar</Text>
        </Pressable>
      </View>
      <View
        style={styles.contenido}
      >
        <View style={styles.campo}>
          <Text style={styles.label}>Paciente</Text>
          <Text style={styles.valor}>{paciente.paciente}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Propietario</Text>
          <Text style={styles.valor}>{paciente.propietario}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.valor}>{paciente.email}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Telefono</Text>  
          <Text style={styles.valor}>{paciente.telefono}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Fecha</Text>  
          <Text style={styles.valor}>{formatearFecha(paciente.fecha)}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Sintomas</Text>  
          <Text style={styles.valor}>{paciente.sintomas}</Text>
        </View>

      </View>
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
  },
  btnCerrar:{
    marginVertical: 30,
    backgroundColor: '#E06900',
    marginHorizontal: 30,
    padding:20,
    borderRadius: 10


  },
  btnCerrarTexto:{
    color:'#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase'
  },
  contenido:{
    backgroundColor:'#FFF',
    marginHorizontal:30,
    borderRadius:10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 3.22,
    elevation: 4,
  },
  campo:{
    marginBottom: 10
  },
  label:{
    textTransform:'uppercase',
    color: '#374151',
    fontSize: 12,
    fontWeight: '600',
  },
  valor:{
    fontWeight:700,
    fontSize: 20,
    color: '#334155'
  }
}
)

export default InfoPaciente