import request from '../http'

const PREFIX = 'article'

const articleAPI = {
    getTypeInfo() {
        return request (
            `getTypeInfo`,
            'get',
        )
    },
    list() {
        return request (
            `${PREFIX}/list`,
            'post',
        )
    },
    getById(id) {
        return request (
            `${PREFIX}/getById/` + id,
            'get'
        )
    },
    getListById(id) {
        return request (
            `${PREFIX}/getListById/` + id,
            'get'
        )
    }
}

export default {
    articleAPI
}
