import axios from 'axios';
import { endpoint } from '../settings.json';

const instanceAxios = axios.create({
  baseURL:`${endpoint}`,
  timeout: 20000,
  responseType: 'json',
  transformResponse: [function (data) {
    if(data && data.code&&data.code !=='0'){
      alert('出错了');
    }
    return data;
  }],
});

export default instanceAxios;
