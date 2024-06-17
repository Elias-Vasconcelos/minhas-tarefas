import React from 'react'
import EstiloGlobal, { Container } from './styles'
import BararaLateral from './containers/aside'
import ListaTarefas from './containers/listaTarefas'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BararaLateral />
        <ListaTarefas />
      </Container>
    </>
  )
}

export default App
