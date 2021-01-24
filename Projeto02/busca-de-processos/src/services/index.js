import axios from 'axios';
import * as api from './api';

const BASE_URL = api.API_URL;

const ProcessoService = {

    cadastrarProcesso(processo) {
        try {
            return axios.post(BASE_URL, processo);
        } catch (error) {
            throw error;
        }
    },

    buscarProcessos(q = "") {
        return axios.get(`${BASE_URL}?q=${q}`)
            .then(response => response.data)
            .catch(error => {
                throw error
            });
    },

    excluirProcesso(id) {
        return axios.delete(`${BASE_URL}/${id}`)
            .catch(error => {
                throw error;
            });
    },

    editarProcesso(id) {
        // Backend ainda não implementado
        return axios.get(`${BASE_URL}/${id}`)
            .then(response => response.data)
            .catch(error => {
                throw error
            });
    }

}

export default ProcessoService;