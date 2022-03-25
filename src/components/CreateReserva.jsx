import React, { Component } from 'react'
import ReservaService from '../services/ReservaService'

class CreateReserva extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // step 2
      idReserva: this.props.match.params.idReserva,
      fkIdCliente: '',
      fkIdPacote: ''
    }
    this.changeFkIdClienteHandler = this.changeFkIdClienteHandler.bind(this);
    this.changeFkIdPacoteHandler = this.changeFkIdPacoteHandler.bind(this);
    this.saveOrUpdateReserva = this.saveOrUpdateReserva.bind(this);
  }

  // step 3
  componentDidMount() {

    // step 4
    if (this.state.idReserva === '_add') {
      return
    } else {
      ReservaService.getReservaById(this.state.idReserva).then((res) => {
        let reserva = res.data;
        this.setState({
          fkIdCliente: reserva.fkIdCliente,
          fkIdPacote: reserva.fkIdPacote

        });
      });
    }
  }
  saveOrUpdateReserva = (e) => {
    e.preventDefault();
    let reserva = { fkIdCliente: this.state.fkIdCliente, fkIdPacote: this.state.fkIdPacote };
    console.log('reserva => ' + JSON.stringify(reserva));

    // step 5
    if (this.state.idReserva === '_add') {
      ReservaService.createReserva(reserva).then(res => {
        this.props.history.push('/reservas');
      });
    } else {
      ReservaService.updateReserva(reserva, this.state.idReserva).then(res => {
        this.props.history.push('/reservas');
      });
    }
  }

  changeFkIdClienteHandler = (event) => {
    this.setState({ fkIdCliente: event.target.value });
  }

  changeFkIdPacoteHandler = (event) => {
    this.setState({ fkIdPacote: event.target.value });
  }


  cancel() {
    this.props.history.push('/reservas');
  }

  getTitle() {
    if (this.state.idReserva === '_add') {
      return <h3 className="text-center">Adicionar funcionario</h3>
    } else {
      return <h3 className="text-center">Editar fincionario</h3>
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
              <form>
                <div className="card-body col">
                  <div className="form-group mb-3">
                    <label> Primerio nome: </label>
                    <input placeholder="Primerio nome" name="fkIdCliente" className="form-control"
                      value={this.state.fkIdCliente.idCliente} onChange={this.changeFkIdClienteHandler} />
                  </div>
                </div>
                <div className="card-body col">
                  <div className="form-group mb-3">
                    <label> Sobrenome: </label>
                    <input placeholder="Sobrenome" name="fkIdPacote" className="form-control"
                      value={this.state.fkIdPacote.idPacote} onChange={this.changeFkIdPacoteHandler} />
                  </div>
                </div>
                <div className=' '>
                  <button className="btn btn-success me-2" onClick={this.saveOrUpdatePacote}>Salvar</button>
                  <button className="btn btn-danger " onClick={this.cancel.bind(this)} >Cancelar</button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default CreateReserva