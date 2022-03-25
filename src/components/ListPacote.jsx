import React, { Component } from 'react'
import PacoteService from '../services/PacoteService'


class ListPacote extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pacote: []
    }
    this.addPacote = this.addPacote.bind(this)
    this.editPacote = this.editPacote.bind(this)
    this.deletePacote = this.deletePacote.bind(this)
  }

  deletePacote(idPacote) {
    PacoteService.deletePacote(idPacote).then(res => {
      this.setState({
        pacote: this.state.pacote.filter(pacote => pacote.idPacote !== idPacote)
      })
    })
  }
  viewPacote(idPacote) {
    this.props.history.push(`/view-pacote/${idPacote}`)
  }
  editPacote(idPacote) {
    this.props.history.push(`/add-pacote/${idPacote}`)
  }

  componentDidMount() {
    PacoteService.getPacotes().then(res => {
      this.setState({ pacote: res.data })
    })
  }

  addPacote() {
    this.props.history.push('/add-pacote/_add')
  }

  render() {
    return (
      <div className='container w-75 mt-5'>
        <h2 className="text-center">Lista de funcionarios</h2>
        <div className="row">
          <button className="btn btn-primary my-1" onClick={this.addPacote}>
            Adicionar funcionario
          </button>
        </div>

        <div className="row mt-2">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th className='text-center'> Destino </th>
                <th className='text-center'> Dias </th>
                <th className='text-center'> Valor</th>
                <th className='text-center'> Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.pacote.map(pacote => (
                <tr key={pacote.idPacote}>
                  <td> {pacote.destino} </td>
                  <td> {pacote.dias}</td>
                  <td> {pacote.valor}</td>
                  <td>
                    <button
                      onClick={() => this.editPacote(pacote.idPacote)}
                      className="btn btn-info m-1"
                    >
                      Alterar{' '}
                    </button>
                    <button
                      onClick={() => this.deletePacote(pacote.idPacote)}
                      className="btn btn-danger m-1"
                    >
                      Deletar{' '}
                    </button>
                    <button
                      onClick={() => this.viewPacote(pacote.idPacote)}
                      className="btn btn-info m-1"
                    >
                      Visualizar{' '}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ListPacote
