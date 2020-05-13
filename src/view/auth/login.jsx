import * as React from 'react'
import { connect } from 'react-redux' //引入连接器
import { bindActionCreators } from 'redux'
import { Account as AccountActions, Auth as AuthActions } from '@/store/actions'
import * as api from '@/api'

function mapState(state) {
  return {
    user: state.account.user,
  }
}
function mapDispatch(dispatch) {
  return {
    ...bindActionCreators({ ...AccountActions, ...AuthActions }, dispatch),
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'aaaa',
    }
    this.setName = this.setName.bind(this)
  }
  setName = () => {
    // this.props.updateUser({ name: '12312375895' })
    // console.info(store);
    // this.props.updateAccessToken()
    // this.props.history.push('/production')
    api.account_v1_sms_login_post({ setting: { loading: true }, data: { phoneNum: '13427588352', smsCode: '.#18' } }).then((e) => {
    })
    // throw new Error()
  }
  render() {
    return <div onClick={this.setName}>{JSON.stringify(this.props.user)}</div>
  }
}

export default connect(mapState, mapDispatch)(Login)
