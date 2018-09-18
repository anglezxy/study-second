import axios from 'axios';
import { endpoint } from './settings.json';

const instance = axios.create({
  baseURL: `${endpoint}`,
  timeout: 20000,
  responseType: 'json',
});

export default instance;

let imgBaseUrl="https://fuss10.elemecdn.com";
let imgUrl = "http://cangdu.org:8001/img/"
export {
  imgBaseUrl,
  imgUrl,
}
