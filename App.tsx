import React, { useEffect,useContext } from 'react';
import {DataContext,DataProvider} from './src/context/DataContext'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Alert,
  Modal
} from 'react-native';
import "reflect-metadata";
import RNFS from 'react-native-fs'
//import { DataSource,Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import SQLite from 'react-native-sqlite-storage'


import Formulario from './src/components/Formulario'
import Paciente from './src/components/Paciente'
import InfoPaciente from './src/components/InfoPaciente'
//import { EntidadPaciente } from './src/entity/EntidadPaciente';


const Main = () => {
  const {paciente,setPaciente,pacientes,setPacientes,modalVisible,setModalVisible,modalPaciente,setModalPaciente} = useContext( DataContext )



  const fullPathDb = RNFS.DocumentDirectoryPath+'/my.db'
  const fullRestoreDb = RNFS.DownloadDirectoryPath+'/my.db'
  /* const MyDataSource = new DataSource({
    type: 'react-native',
    database: fullPathDb,
    location: 'default',
  }); */
  useEffect(() => {  
    
    SQLite.openDatabase({name: 'my.db', location: RNFS.DocumentDirectoryPath}, successcb, errorcb); 
    function successcb(){
      console.log("Base de datos creada")
    }
    function errorcb(){
      console.log("No se ha creado la base de datos")
    }
    copyDB()
    
  }, []);

  async function copyDB() {
    try {
        await RNFS.copyFile(fullPathDb, fullRestoreDb)
        console.log('Copiado correctamente')
        return true
    } catch (e) {
        console.log(e)
        return false
    }
  }

  const agregaPaciente = async (nuevoPaciente) =>{
    console.log(paciente)
    
    /* try {
      const userRepository = MyDataSource.getRepository(EntidadPaciente)
      entidadPaciente = new EntidadPaciente()
      entidadPaciente.id = nuevoPaciente.id
      entidadPaciente.nombre = nuevoPaciente.nombre
      entidadPaciente.propietario = nuevoPaciente.porpietario
      entidadPaciente.fecha = nuevoPaciente.fecha
      entidadPaciente.sintomas = nuevoPaciente.sintomas
      await userRepository.save(entidadPaciente)
    } catch (error) {
      console.log("Error:",error)
    } */
    

  }

  const pacienteEditar = id => {
    const pacienteActual = pacientes.filter(paciente => paciente.id === id)
    setPaciente(pacienteActual[0])
  }

  const pacienteEliminar = id => {
    Alert.alert(
      '¿Seguro que deseas eliminar este paciente?',
      'Un paciente eliminado no se puede recuperar',
      [
        { text: 'Cancelar'},
        { text: 'Si, Eliminar', onPress:()=>{
          const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
          setPacientes(pacientesActualizados)
        }}
      ]
    )
  }



  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Administracion de citas{' '}
        <Text style={styles.tituloBold}>Veterinaria</Text>
        </Text>
        <Pressable
          onPress={() => {setModalVisible(!modalVisible)}}
          style={styles.btnNuevaCita}
        >
          <Text
          style={styles.btnTextoNuevaCita}
          >
            Nueva cita
          </Text>
        </Pressable>
        
        {pacientes.length === 0 ? 
          <Text style={styles.noPacientes}>No hay pacientes</Text>:
          <FlatList
            style={styles.listado}
            data={pacientes}
            keyExtractor={(item)=> item.id}
            renderItem={({item})=>{
              return(
                <Paciente 
                  item={item}
                  pacienteEditar={pacienteEditar}
                  pacienteEliminar={pacienteEliminar}
                />
              )
            }}
          />
        }
        {modalVisible &&(
          <Formulario
            agregaPaciente={agregaPaciente}
          />
        )}
        

        <Modal
          visible={modalPaciente}
          animationType='fade'
          
        >
          <InfoPaciente />
        </Modal>

      </SafeAreaView>
  );

}


function App(): JSX.Element {

  

  return (
    <DataProvider>
      <Main/>
    </DataProvider>
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
  },
  noPacientes:{
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600'
  },
  listado:{
    marginTop: 50,
    marginHorizontal: 30
  }
})


export default App;
