/* 鉴权路由 */
import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import withRouterEnter from './withRouterEnter';

/* 函数组件 */
function AuthRoute({ key, isLogin, path, exact, routes, meta = {}, component: DefaultComponent }) {
  const { needAuth } = meta;
  return (
    <Route
      exact={exact}
      path={path}
      key={key}
      render={(props) => {
        if (needAuth === true && !isLogin) {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location, // 记录当前页面
                },
              }}></Redirect>
          );
        } else {
          const WithRouterEnter = withRouterEnter(DefaultComponent, routes, props);
          return <WithRouterEnter></WithRouterEnter>
        }
      }}></Route>
  );
}
export default AuthRoute;
