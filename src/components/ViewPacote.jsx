import React, { Component } from 'react'
import PacoteService from '../services/PacoteService'

class ViewPacote extends Component {
  constructor(props) {
    super(props)

    this.state = {
      idPacote: this.props.match.params.idPacote,
      pacote: {}
    }
  }

  componentDidMount() {
    PacoteService.getPacoteById(this.state.idPacote).then(res => {
      this.setState({ pacote: res.data });
    })
  }

  render() {
    return (
      <div className='mt-3'>

        <div className="card col-md-6 offset-md-3">
          <h2 className="text-center my-1">Detalhes do Pacote </h2>
          <div className="card-body">
            <div className="row mb-2">
              <label className='fw-bold'>Destino: </label>
              <div> {this.state.pacote.destino}</div>
            </div>
            <div className="row mb-2">
              <label className='fw-bold'> Dias: </label>
              <div> {this.state.pacote.dias}</div>
            </div>
            <div className="row">
              <label className='fw-bold'> Valor: </label>
              <div> {this.state.pacote.valor}</div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default ViewPacote