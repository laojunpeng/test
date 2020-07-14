import * as React from 'react'
import { BrowserRouter, Switch, withRouter, Route  } from 'react-router-dom'
import routes from './router'
import authRouter from '@/utils/authRoute'
import { connect } from 'react-redux' //引入连接器
import {store} from '@/store'
import { Auth as AuthActions } from '@/store/actions';

function mapState(state) {
  return {
    isLogin: state.account.isLogin,
  }
}

class App extends React.Component {
  componentDidMount(){
    //判断初始加载路由路径
  console.info("判断初始加载路由路径")
 }

 componentWillReceiveProps(nextProps){
  //路由变化时判断
  console.info(nextProps,"nextProps")

}
  render() {
    const isLogin = this.props.isLogin;
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
