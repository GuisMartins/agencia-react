import React, { Component } from 'react'
import ReservaService from '../services/ReservaService'


class ListReserva extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reserva: []
    }
    this.addReserva = this.addReserva.bind(this)
    this.editReserva = this.editReserva.bind(this)
    this.deleteReserva = this.deleteReserva.bind(this)
  }

  deleteReserva(idReserva) {
    ReservaService.deleteReserva(idReserva).then(res => {
      this.setState({
        reserva: this.state.reserva.filter(reserva => reserva.idReserva !== idReserva)
      })
    })
  }
  viewReserva(idReserva) {
    this.props.history.push(`/view-reserva/${idReserva}`)
  }
  editReserva(idReserva) {
    this.props.history.push(`/add-reserva/${idReserva}`)
  }

  componentDidMount() {
    ReservaService.getReservas().then(res => {
      this.setState({ reserva: res.data })
    })
  }

  addReserva() {
    this.props.history.push('/add-reserva/_add')
  }

  render() {
    return (
      <div className='container w-75 mt-5'>
        <h2 className="text-center">Lista de funcionarios</h2>
        <div className="row">
          <button className="btn_ btn--success m-2 mx-auto" onClick={this.addReserva}>
            Adicionar funcionario
          </button>
        </div>

        <div className="row mt-2">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className='text-center'> Cod do Cliente </th>
                <th className='text-center'> Nome do Cliente </th>

                <th className='text-center'> Cod do Pacote </th>
                <th className='text-center'> Destino do Pacote </th>

                <th className='text-center'> Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.reserva.map(reserva => (
                <tr key={reserva.idReserva}>
                  <td> {reserva.fkIdCliente.idCliente}</td>
                  <td> {reserva.fkIdCliente.nome}</td>
                  <td> {reserva.fkIdPacote.idPacote} </td>
                  <td> {reserva.fkIdPacote.destino} </td>

                  <td>
                    <button
                      onClick={() => this.editReserva(reserva.idReserva)}
                      className="btn_ btn--success m-2 mx-auto"
                    >
                      Alterar{' '}
                    </button>
                    <button
                      onClick={() => this.deleteReserva(reserva.idReserva)}
                      className="btn_ btn--success m-2 mx-auto"
                    >
                      Deletar{' '}
                    </button>
                    <button
                      onClick={() => this.viewReserva(reserva.idReserva)}
                      className="btn_ btn--success m-2 mx-auto"
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

export default ListReserva
