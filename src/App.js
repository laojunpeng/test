import * as React from 'react'
import { BrowserRouter, Switch, withRouter, Route  } from 'react-router-dom'
import routes from './router'
import authRouter from '@/utils/authRoute'
import { connect } from 'react-redux'; //引入连接器
import { bindActionCreators } from 'redux';
import { Account as AccountActions, Auth as AuthActions } from '@/store/actions';

function mapStateToProps(state) {
  return {
    user: state.account.user,
    isLogin: state.account.isLogin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ ...AccountActions,...AuthActions }, dispatch),
  };
}

class App extends React.Component {
  render() {
    console.info(this.props.isLogin);
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
export default connect(mapStateToProps, mapDispatchToProps)(App);

