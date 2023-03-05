import React, { createContext,useState } from "react"
export const DataContext = createContext()



export const DataProvider = ({ children }) => {

  const [modalVisible, setModalVisible] = useState(false)
  const [modalPaciente, setModalPaciente] = useState(false)
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  return (
    <DataContext.Provider value={
        {
            modalVisible,
            setModalVisible,
            modalPaciente,
            setModalPaciente,
            paciente,
            setPaciente,
            pacientes,
            setPacientes
        }
    }>
      { children }
    </DataContext.Provider>
  )
}

export default DataContext
