import request from '../http'

const PREFIX = 'comment'

const commentAPI = {
  list() {
    return request(
      `${PREFIX}/list`,
      'post',
    )
  },
  add(data) {
    return request(
      `${PREFIX}/add`,
      'post',
      data
    )
  },
  update(data) {
    return request(
      `${PREFIX}/update`,
      'post',
      data
    )
  },
  del(id) {
    return request(
      `${PREFIX}/del/${id}`,
      'get',
    )
  },
  getById(id) {
    return request(
      `${PREFIX}/getById/${id}`,
      'get',
    )
  }
}

export default {
  commentAPI
}
