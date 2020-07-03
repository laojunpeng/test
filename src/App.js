import * as React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import routes from './router'
import authRouter from '@/utils/authRoute'

import { connect } from 'react-redux' //引入连接器

function mapState(state) {
  return {
    isLogin: state.account.isLogin,
  }
}

class App extends React.Component {
  render() {
    const isLogin = this.props.isLogin
    return (
      <BrowserRouter>
        <Switch>
          {routes.map(({ component: Component, ...rest }, index) => {
            return authRouter({ isLogin, key: index, ...rest, component: Component })
          })}
        </Switch>
      </BrowserRouter>
    )
  }
}
export default connect(mapState)(App)
