import request from '../http'

const PREFIX = 'admin'

const userAPI = {
  login(params) {
    return request(
      `login`,
      'post',
      params
    )
  }
}

export default {
  userAPI
}
