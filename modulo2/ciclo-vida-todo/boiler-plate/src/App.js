import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    filtro: ''
  }

  componentDidUpdate() {
    localStorage.setItem("tarefa", JSON.stringify(this.state.tarefas))
  };

  pegarDados = (event) => {
    if (localStorage.getItem("tarefa") === null || localStorage.getItem("tarefa") === "") { return }
    const listaDoLocalStorege = JSON.parse(localStorage.getItem("tarefa"))
    this.setState({ tarefas: listaDoLocalStorege });
  }

  componentDidMount() {
    this.pegarDados()
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  deletarTodas = () => {
    // const confirma = window.confirm("Deseja apagar tudo?")
    if (window.confirm("Deseja apagar tudo?")){
    localStorage.setItem("tarefa", "")
    this.setState({ tarefas: [] })}
  }

  criaTarefa = () => {
    if (!this.state.inputValue) {
      alert("Precisa Digitar")
    } else {
      const novaTarefa = {
        id: Date.now(),
        texto: this.state.inputValue,
        completa: false
      }
      const novaListaDeTarefas = [...this.state.tarefas, novaTarefa]

      this.setState({ tarefas: novaListaDeTarefas })
      this.setState({ inputValue: '' })
    }
  }

  selectTarefa = (id) => {
    const tarefaAlterada = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const alteracao = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return alteracao
      } else {
        return tarefa
      }
    })

    this.setState({ tarefas: tarefaAlterada })
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }


  botaoApagar = () => {
    if(this.state.tarefas.length !== 0) {
      return (
        <button onClick={this.deletarTodas}>Apagar Todas</button>
      )}
  }


  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa, index) => {
            return (
              <Tarefa key={index}
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
    {this.botaoApagar()}
        </TarefaList>
      </div>
    )
  }
}

export default App
