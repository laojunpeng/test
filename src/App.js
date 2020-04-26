import * as React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import routes from './router'
import authRouter from '@/utils/authRoute'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map(({ component: Component, ...rest }, index) => {
            return authRouter({key:index, path: rest.path, exact: rest.exact, children: rest.routes, component: Component })
            // <Route
            //   key={index}
            //   path={rest.path}
            //   exact={rest.exact}
            //   render={(routeProps: any) => {
            //     return <Component routes={rest.routes} {...routeProps} />
            //     // return authRouter({})
            //   }}
            // />
          })}
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App
