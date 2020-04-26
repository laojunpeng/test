/* 鉴权路由 */
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// import { isAuth } from '../../utils' // 自我封装是否登录的方法
/* 函数组件 */
function AuthRoute({key, path, exact, children, component: DefaultComponent }) {
  return (
    <Route
      exact={exact}
      path={path}
      key={key}
      render={(props) => {
        if (false) {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location, // 记录当前页面
                },
              }}></Redirect>
          )
        }
        return <DefaultComponent {...props} routes={children}></DefaultComponent>
      }}></Route>
  )
}
export default AuthRoute
