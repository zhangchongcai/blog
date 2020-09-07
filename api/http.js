import client from './request'

const API_PREIX = '/default/'

export default function request(url, method, params = {}, headers = {}) {
  const opts = { method, headers }
  opts.url = API_PREIX + url

  if (method.toLowerCase() === 'post' || method.toLowerCase() === 'put') {
    opts.data = params
  } else {
    opts.params = params
  }

  return client(opts)
}
