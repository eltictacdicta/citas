import React, { useEffect,useContext } from 'react';
import {DataContext,DataProvider} from './src/context/DataContext'
import VersionCheck from 'react-native-version-check';
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
import ModeloPacientes from './src/models';
//import { EntidadPaciente } from './src/entity/EntidadPaciente';


const Main = () => {
  const {paciente,setPaciente,pacientes,setPacientes,modalVisible,setModalVisible,modalPaciente,setModalPaciente} = useContext( DataContext )



  const fullPathDb = '/data/data/'+VersionCheck.getPackageName()+'/databases//my.db'
  const fullRestoreDb = RNFS.DownloadDirectoryPath+'/my.db'
  /* const MyDataSource = new DataSource({
    type: 'react-native',
    database: fullPathDb,
    location: 'default',
  }); */
  useEffect(() => {

    //copyDB()

    ModeloPacientes.createTable()
   
 
    
    
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
    console.log("id:", typeof nuevoPaciente.id)
    console.log("nombre:", typeof nuevoPaciente.nombre)
    console.log("propietario:", typeof nuevoPaciente.propietario)
    nuevoPaciente.fecha = nuevoPaciente.fecha.getTime()
    console.log("fecha:", typeof nuevoPaciente.fecha)
    console.log("sintomas:", typeof nuevoPaciente.sintomas)
    console.log("email:", typeof nuevoPaciente.email)
    ModeloPacientes.create(new ModeloPacientes(nuevoPaciente))
    
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
        <Pressable
          onPress={() => {
            console.log("Has presionado")
            ModeloPacientes.dropTable()
            ModeloPacientes.createTable()
            const pacientePrueba={
              id: 1,
              nombre: "nombre prueba222",
              propietario: "propietario prueba",
              email:"a@a.com",
              telefono:"1111111",
              fecha:1111111,
              sintomas:"Sintomas"
            }
            const pacientePrueba2={
              id: 2,
              nombre: "nombre prueba",
              propietario: "propietario prueba2",
              email:"a@a.com",
              telefono:"1111111",
              fecha:1111111,
              sintomas:"Sintomas"
            }

            ModeloPacientes.create(new ModeloPacientes(pacientePrueba))
            ModeloPacientes.create(new ModeloPacientes(pacientePrueba2))
          
            ModeloPacientes.copyDB()
             const options = {
              columns: '*',

              order: 'id ASC'
            }
            
            ModeloPacientes.query(options) 
            //console.log(ModeloPacientes.all())
          }}
          style={styles.btnNuevaCita}
        >
          <Text
          style={styles.btnTextoNuevaCita}
          >
            Prueba db
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
