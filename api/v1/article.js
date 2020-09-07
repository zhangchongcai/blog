import request from '../http'
import Meta from 'antd/lib/card/Meta'

const PREFIX = 'article'

const articleAPI = {
    list() {
        return request(
            `${PREFIX}/list`,
            'post',
        )
    },
}

export default {
    articleAPI
}
