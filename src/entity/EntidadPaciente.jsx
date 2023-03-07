import SQLite from 'react-native-sqlite-storage'
import { BaseModel, types } from 'expo-sqlite-orm'

export default class EntidadPaciente extends BaseModel {
  constructor(obj) {
    super(obj)
  }

  static get database() {
    return async () => SQLite.openDatabase({ name: 'database.db' })
  }

  static get tableName() {
    return 'pacientes'
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true }, // For while only supports id as primary key
      name: { type: types.TEXT, not_null: true },
      color: { type: types.TEXT },
      age: { type: types.NUMERIC },
      another_uid: { type: types.INTEGER, unique: true },
      timestamp: { type: types.INTEGER, default: () => Date.now() }
    }
  }
}

import { Entity, PrimaryColumn, Column } from "typeorm/browser"

@Entity()
export class EntidadPaciente {
    @PrimaryColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    paciente: string

    @Column()
    fecha: string

    @Column()
    sintomas: string
}

