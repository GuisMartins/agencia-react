import React, { Component } from 'react'
import ClienteService from '../services/ClienteService'

class ViewCliente extends Component {
  constructor(props) {
    super(props)

    this.state = {
      idCliente: this.props.match.params.idCliente,
      cliente: {}
    }
  }

  componentDidMount() {
    ClienteService.getClienteById(this.state.idCliente).then(res => {
      this.setState({ cliente: res.data });
    })
  }

  render() {
    return (
      <div className='mt-3 min-vh-100'>

        <div className="card col-md-6 offset-md-3">
          <h2 className="text-center my-1">Detalhes do Cliente </h2>
          <div className="card-body">
            <div className="row mb-2">
              <label className='fw-bold'>Nome: </label>
              <div> {this.state.cliente.nome}</div>
            </div>
            <div className="row mb-2">
              <label className='fw-bold'> CPF: </label>
              <div> {this.state.cliente.cpf}</div>
            </div>
            <div className="row mb-2">
              <label className='fw-bold'> Data de Nascimento: </label>
              <div> {this.state.cliente.dataNasc}</div>
            </div><div className="row mb-2">
              <label className='fw-bold'> telefone: </label>
              <div> {this.state.cliente.telefone}</div>
            </div>
            <div className="row">
              <label className='fw-bold'> E-mail: </label>
              <div> {this.state.cliente.email}</div>
            </div>
            <div className="row mb-2">
              <label className='fw-bold'> Endereço: </label>
              <div> {this.state.cliente.endereco}</div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default ViewCliente