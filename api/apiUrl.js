const ipUrl = 'http://127.0.0.1:7001/default/'

let servicePath = {
    getArticleList : ipUrl + 'getArticleList', // 首页
    getArticleById : ipUrl + 'getArticleById/', // 详细
    getTypeInfo : ipUrl + 'getTypeInfo',    // 首页nav类
    getListById : ipUrl + 'getListById/' // 列表
}
export default servicePath