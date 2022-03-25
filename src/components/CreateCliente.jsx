import React, { Component } from 'react'
import ClienteService from '../services/ClienteService'

class CreateCliente extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // step 2
      idCliente: this.props.match.params.idCliente,
      nome: '',
      cpf: '',
      dataNasc: ''
    }
    this.changeNomeHandler = this.changeNomeHandler.bind(this);
    this.changecpfHandler = this.changecpfHandler.bind(this);
    this.saveOrUpdateCliente = this.saveOrUpdateCliente.bind(this);
  }

  // step 3
  componentDidMount() {

    // step 4
    if (this.state.idCliente === '_add') {
      return
    } else {
      ClienteService.getClienteById(this.state.idCliente).then((res) => {
        let cliente = res.data;
        this.setState({
          nome: cliente.nome,
          cpf: cliente.cpf,
          dataNasc: cliente.dataNasc,
          telefone: cliente.telefone,
          email: cliente.email,
          endereco: cliente.endereco
        });
      });
    }
  }
  saveOrUpdateCliente = (e) => {
    e.preventDefault();
    let cliente = { nome: this.state.nome, cpf: this.state.cpf, dataNasc: this.state.dataNasc, telefone: this.state.telefone, email: this.state.email, endereco: this.state.endereco };
    console.log('cliente => ' + JSON.stringify(cliente));

    // step 5
    if (this.state.idCliente === '_add') {
      ClienteService.createCliente(cliente).then(res => {
        this.props.history.push('/clientes');
      });
    } else {
      ClienteService.updateCliente(cliente, this.state.idCliente).then(res => {
        this.props.history.push('/clientes');
      });
    }
  }

  changeNomeHandler = (event) => {
    this.setState({ nome: event.target.value });
  }

  changecpfHandler = (event) => {
    this.setState({ cpf: event.target.value });
  }

  changeDataNascHandler = (event) => {
    this.setState({ dataNasc: event.target.value });
  }

  changeTelefoneHandler = (event) => {
    this.setState({ telefone: event.target.value });
  }

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  }

  changeEnderecoHandler = (event) => {
    this.setState({ endereco: event.target.value });
  }


  cancel() {
    this.props.history.push('/clientes');
  }

  getTitle() {
    if (this.state.idCliente === '_add') {
      return <h3 className="text-center">Adicionar Cliente</h3>
    } else {
      return <h3 className="text-center">Editar Cliente</h3>
    }
  }
  render() {
    return (
      <div>

        <div className="container mt-3 min-vh-100">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {
                this.getTitle()
              }
              <div className="card-body">
                <form>
                  <div className="form-group mb-3">
                    <label> Nome: </label>
                    <input placeholder="Nome" name="nome" className="form-control"
                      value={this.state.nome} onChange={this.changeNomeHandler} />
                  </div>
                  <div className="form-group mb-3">
                    <label> CPF: </label>
                    <input placeholder="CPF" name="cpf" className="form-control"
                      value={this.state.cpf} onChange={this.changecpfHandler} />
                  </div>
                  <div className="form-group mb-3">
                    <label> Data de Nascimento: </label>
                    <input placeholder="Data de Nascimento" name="dataNasc" className="form-control"
                      value={this.state.dataNasc} onChange={this.changeDataNascHandler} />
                  </div>
                  <div className="form-group mb-3">
                    <label> Telefone: </label>
                    <input placeholder="Telefone" name="telefone" className="form-control"
                      value={this.state.telefone} onChange={this.changeTelefoneHandler} />
                  </div>
                  <div className="form-group mb-3">
                    <label> Email: </label>
                    <input placeholder="Endereço de e-mail" name="email" className="form-control"
                      value={this.state.email} onChange={this.changeEmailHandler} />
                  </div>
                  <div className="form-group mb-3">
                    <label> Endereço: </label>
                    <input placeholder="Endereço" name="endereco" className="form-control"
                      value={this.state.endereco} onChange={this.changeEnderecoHandler} />
                  </div>
                  <div className='w-75 mx-auto'>
                    <button className="btn_ btn--success m-2 mx-auto" onClick={this.saveOrUpdateCliente}>Salvar</button>
                    <button className="btn_ btn--success m-2 " onClick={this.cancel.bind(this)} >Cancelar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default CreateCliente