import React, { Component } from 'react'
import ReservaService from '../services/ReservaService'

class ViewReserva extends Component {
  constructor(props) {
    super(props)

    this.state = {
      idReserva: this.props.match.params.idReserva,
      reserva: {}
    }
  }

  componentDidMount() {
    ReservaService.getReservaById(this.state.idReserva).then(res => {
      this.setState({ reserva: res.data });
    })
  }

  render() {
    return (
      <div className='mt-3 min-vh-100'>

        <div className="card col-md-6 offset-md-3">
          <h2 className="text-center my-1">Detalhes da Reserva </h2>
          <div className="card-body">
            <div className="row mb-2">
              <label className='fw-bold'> Cod da Reserva: </label>
              <div> {this.state.reserva.idReserva}</div>
            </div>

          </div>

        </div>
      </div>
    )
  }

}

export default ViewReserva