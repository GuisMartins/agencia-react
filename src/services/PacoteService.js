import axios from 'axios'

const PACOTE_API_BASE_URL = 'http://localhost:8080/api/pacote'

class PacoteService {
  getPacotes() {
    return axios.get(PACOTE_API_BASE_URL)
  }

  createPacote(pacote) {
    return axios.post(PACOTE_API_BASE_URL, pacote)
  }

  getPacoteById(pacoteId) {
    return axios.get(PACOTE_API_BASE_URL + '/' + pacoteId)
  }

  updatePacote(pacote, pacoteId) {
    return axios.put(PACOTE_API_BASE_URL + '/' + pacoteId, pacote)
  }

  deletePacote(pacoteId) {
    return axios.delete(PACOTE_API_BASE_URL + '/' + pacoteId)
  }
}

export default new PacoteService()
