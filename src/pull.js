import 'whatwg-fetch'
let headers = {
  'Accept': 'application/json'
}
let convertQuery = params => {
  if (!params) {
    return ''
  }
  return Object.keys(params).reduce((pre, key) => (pre + `${key}=${params[key]}&`), '').slice(0, -1)
}
let request = (url, init, loading) => fetch(url, init, loading).then((res) => {
  if (res.ok) {
    if (res.errCode == -1) {
      return
    }
    let type = res.headers.get('Content-Type').split(';')[0]
    switch (type) {
      case 'image/jpeg':
        return res.blob()
      case 'application/json':
        return res.json()
    }
  } else {
  }
})
window.pull = {
  get: (url, query, loading = false) => {
    return request(`${url}?${convertQuery(query)}`, {
      credentials: 'include',
      method: 'get',
      headers: headers
    })
  },
  post: (url, query, loading = false) => {
    return request(url, {
      credentials: 'include',
      method: 'post',
      headers: Object.assign({}, headers, {
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      body: convertQuery(query)
    }, loading)
  }
}
export default pull
