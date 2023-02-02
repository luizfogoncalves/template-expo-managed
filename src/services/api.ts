import axios from 'axios';

const api = axios.create();

export default api;

export interface BaseResponse {
  codigo: number;
  mensagem: string;
}
