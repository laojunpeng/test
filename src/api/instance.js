import { createAPI } from './util';
import config from './config';

const baseUrl = {
  mock: 'https://www.easy-mock.com/mock/5c3d86ec4ac38336de59399c/zib-app-payment',
  dev: '',
  pre: '',
  prod: ''
}[config.env || 'mock'];

export default createAPI(baseUrl);
