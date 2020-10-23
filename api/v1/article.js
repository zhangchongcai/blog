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
    },
    getListByType(type) {
        return request (
            `${PREFIX}/getListByType/` + type,
            'get'
        )
    }
}

export default {
    articleAPI
}
