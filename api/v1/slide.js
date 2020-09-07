import request from '../http'

const PREFIX = 'slide'

const slideAPI = {
  list() {
    return request(
      `${PREFIX}/list`,
      'post',
    )
  }
}
export default {
  slideAPI
}
