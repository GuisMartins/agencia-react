import React, { Component } from 'react'
import PacoteService from '../services/PacoteService'

class CreatePacote extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // step 2
      idPacote: this.props.match.params.idPacote,
      destino: '',
      dias: '',
      valor: ''
    }
    this.changeDestinoHandler = this.changeDestinoHandler.bind(this);
    this.changeDiasHandler = this.changeDiasHandler.bind(this);
    this.saveOrUpdatePacote = this.saveOrUpdatePacote.bind(this);
  }

  // step 3
  componentDidMount() {

    // step 4
    if (this.state.idPacote === '_add') {
      return
    } else {
      PacoteService.getPacoteById(this.state.idPacote).then((res) => {
        let pacote = res.data;
        this.setState({
          destino: pacote.destino,
          dias: pacote.dias,
          valor: pacote.valor
        });
      });
    }
  }
  saveOrUpdatePacote = (e) => {
    e.preventDefault();
    let pacote = { destino: this.state.destino, dias: this.state.dias, valor: this.state.valor };
    console.log('pacote => ' + JSON.stringify(pacote));

    // step 5
    if (this.state.idPacote === '_add') {
      PacoteService.createPacote(pacote).then(res => {
        this.props.history.push('/pacotes');
      });
    } else {
      PacoteService.updatePacote(pacote, this.state.idPacote).then(res => {
        this.props.history.push('/pacotes');
      });
    }
  }

  changeDestinoHandler = (event) => {
    this.setState({ destino: event.target.value });
  }

  changeDiasHandler = (event) => {
    this.setState({ dias: event.target.value });
  }

  changeValorHandler = (event) => {
    this.setState({ valor: event.target.value });
  }

  cancel() {
    this.props.history.push('/pacotes');
  }

  getTitle() {
    if (this.state.idPacote === '_add') {
      return <h3 className="text-center">Adicionar Pacote</h3>
    } else {
      return <h3 className="text-center">Editar Pacote</h3>
    }
  }
  render() {
    return (
      <div>

        <div className="container mt-3">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {
                this.getTitle()
              }
              <div className="card-body">
                <form>
                  <div className="form-group mb-3">
                    <label> Destino: </label>
                    <input placeholder="Destino" name="destino" className="form-control"
                      value={this.state.destino} onChange={this.changeDestinoHandler} />
                  </div>
                  <div className="form-group mb-3">
                    <label> Dias: </label>
                    <input placeholder="Dias" name="dias" className="form-control"
                      value={this.state.dias} onChange={this.changeDiasHandler} />
                  </div>
                  <div className="form-group mb-3">
                    <label> Valor: </label>
                    <input placeholder="Valor" name="valor" className="form-control"
                      value={this.state.valor} onChange={this.changeValorHandler} />
                  </div>
                  <div className='w-75 mx-auto' >
                    <button className="btn_ btn--success m-2 mx-auto" onClick={this.saveOrUpdatePacote}>Salvar</button>
                    <button className="btn_ btn--success m-2 mx-auto" onClick={this.cancel.bind(this)} >Cancelar</button>
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

export default CreatePacote