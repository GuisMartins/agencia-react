import axios from 'axios'

const RESERVA_API_BASE_URL = 'http://localhost:8080/api/reserva'

class ReservaService {
  getReservas() {
    return axios.get(RESERVA_API_BASE_URL)
  }

  createReserva(reserva) {
    return axios.post(RESERVA_API_BASE_URL, reserva)
  }

  getReservaById(reservaId) {
    return axios.get(RESERVA_API_BASE_URL + '/' + reservaId)
  }

  updateReserva(reserva, reservaId) {
    return axios.put(RESERVA_API_BASE_URL + '/' + reservaId, reserva)
  }

  deleteReserva(reservaId) {
    return axios.delete(RESERVA_API_BASE_URL + '/' + reservaId)
  }
}

export default new ReservaService()
