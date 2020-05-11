import axios from 'axios'
import store from '@/store'
import { Auth as AuthActions } from '@/store/actions'
import { CODE as ErrorCode } from '@/utils/error'
import {getResult} from './resultHandler'

const instance = axios.create()

instance.interceptors.response.use(
  async (response) => {
    return getResult(response,instance)
  },
  (error) => {
    return Promise.reject(error.response)
  },
)

instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const { auth } = store.getState() 
    config.headers = Object.assign({}, config.headers, auth.headerInfo)
    // let token = VueCookie.get(AppUtil.KEYS['TOKEN' + config.headers.appId])
    // config.headers.token = token
    // if (config.headers.authorization == '') {
    //   delete config.headers.authorization
    // }
    return config
  },
  function (error) {
    console.info('request' + error)
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

function createAPI(baseURL) {
  return function (conf={}) {
    return instance(
      Object.assign(
        {},
        {
          url: conf.url,
          baseURL: baseURL,
          method: conf.method,
        },
        conf.opts,
      ),
    )
  }
}

function convertRESTAPI(url, opts) {
  if (!opts || !opts.path) return url
  const pathKeys = Object.keys(opts.path)
  pathKeys.forEach((key) => {
    const r = new RegExp('(:' + key + '|{' + key + '})', 'g')
    url = url.replace(r, opts.path[key])
  })
  return url
}

export { createAPI, convertRESTAPI }
