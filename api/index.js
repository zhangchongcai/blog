const v1Context = require.context('./v1', true, /\.js$/)

const v1ApiList = v1Context.keys().map(key => {
  if (v1Context(key).default) {
    return v1Context(key).default
  }
})

const v1Api = {}
for (const apiObj of v1ApiList) {
  Object.keys(apiObj).forEach((key) => {
    v1Api[key] = apiObj[key]
  })
}

export default v1Api
