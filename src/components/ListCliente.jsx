import React, { Component } from 'react'
import ClienteService from '../services/ClienteService'


class ListCliente extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cliente: []
    }
    this.addCliente = this.addCliente.bind(this)
    this.editCliente = this.editCliente.bind(this)
    this.deleteCliente = this.deleteCliente.bind(this)
  }

  deleteCliente(idCliente) {
    ClienteService.deleteCliente(idCliente).then(res => {
      this.setState({
        cliente: this.state.cliente.filter(cliente => cliente.idCliente !== idCliente)
      })
    })
  }
  viewCliente(idCliente) {
    this.props.history.push(`/view-cliente/${idCliente}`)
  }
  editCliente(idCliente) {
    this.props.history.push(`/add-cliente/${idCliente}`)
  }

  componentDidMount() {
    ClienteService.getClientes().then(res => {
      this.setState({ cliente: res.data })
    })
  }

  addCliente() {
    this.props.history.push('/add-cliente/_add')
  }

  render() {
    return (
      <div className='container w-75 mt-5'>
        <h2 className="text-center">Lista de Clientes</h2>
        <div className="row">
          <button className="bbtn_ btn--success m-2 mx-auto" onClick={this.addCliente}>
            Adicionar Cliente
          </button>
        </div>

        <div className="row mt-2">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className='text-center'> Nome </th>
                <th className='text-center'> CPF </th>
                <th className='text-center'> Data de Nascimento</th>
                <th className='text-center'> Telefone</th>
                <th className='text-center'> E-mail</th>
                <th className='text-center'> Endereço</th>
                <th className='text-center'> Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.cliente.map(cliente => (
                <tr key={cliente.idCliente}>
                  <td> {cliente.nome} </td>
                  <td> {cliente.cpf}</td>
                  <td> {cliente.dataNasc}</td>
                  <td> {cliente.telefone}</td>
                  <td> {cliente.email}</td>
                  <td> {cliente.endereco}</td>
                  <td>
                    <button
                      onClick={() => this.editCliente(cliente.idCliente)}
                      className="btn_ btn--success m-2 mx-auto"
                    >
                      Alterar{' '}
                    </button>
                    <button
                      onClick={() => this.deleteCliente(cliente.idCliente)}
                      className="btn_ btn--success m-2 mx-auto"
                    >
                      Deletar{' '}
                    </button>
                    <button
                      onClick={() => this.viewCliente(cliente.idCliente)}
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

export default ListCliente
