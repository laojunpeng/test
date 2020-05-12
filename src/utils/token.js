const COM_NAME = 'ZIB_'
const NAME = 'TOKEN_'

export const getToken = function (appId) {
  return localStorage.getItem(COM_NAME + NAME + appId) || ''
}

export const setToken = function (appId, token) {
  if (appId && token) {
    localStorage.setItem(COM_NAME + NAME + appId, token)
  }
}
