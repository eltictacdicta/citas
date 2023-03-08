import React from 'react';
import SQLite from 'react-native-sqlite-storage'
import { BaseModel, types } from 'react-native-sqlite-orm'
import VersionCheck from 'react-native-version-check';
import RNFS from 'react-native-fs'
const tabla='pacientes3'
const nombreDb= tabla+'.db'
const fullPathDb = '/data/data/'+VersionCheck.getPackageName()+'/databases//'+nombreDb
const fullRestoreDb = RNFS.DownloadDirectoryPath+'/'+nombreDb
export default class ModeloPacientes extends BaseModel {
  constructor(obj) {
    super(obj)
  }

  static get database() {
    return async () => SQLite.openDatabase({ name: nombreDb, location: 'Default', successcb, errorcb })
    async function successcb(){
        console.log("Base de datos creada")
        if (await RNFS.exists(fullPathDb) === true) {
          console.log("El archivo existe")
        }
        else{
          console.log("El archivo no existe en ",fullPathDb)
        }
      }
      function errorcb(){
        console.log("No se ha creado la base de datos")
      }
  }

  static get tableName() {
    return tabla
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      nombre: { type: types.TEXT, not_null: true },
      propietario: { type: types.TEXT, not_null: true },
      email: { type: types.TEXT, not_null: true },
      telefono: { type: types.TEXT, not_null: false },
      fecha: { type: types.INTEGER, not_null: true },
      sintomas: { type: types.TEXT, not_null: true },
      //created: { type: types.INTEGER, default: () => Date.now() }
    }
  }

  static async all() {
    const sql = 'SELECT * FROM '+tabla+";"
    const respuesta = await this.repository.databaseLayer.executeSql(sql)
    return respuesta

  }
  

  static async copyDB() {
    try {
        await RNFS.copyFile(fullPathDb, fullRestoreDb)
        console.log('Copiado correctamente')
        return true
    } catch (e) {
        console.log(e)
        return false
    }
  }
}