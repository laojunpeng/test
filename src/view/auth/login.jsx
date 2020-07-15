import React, { useState } from 'react';
import { connect } from 'react-redux'; //引入连接器
import { bindActionCreators } from 'redux';
import { Account as AccountActions } from '@/store/actions';
import * as api from '@/api';
import styled from '@/utils/styled-px2vw';
import { Base64 } from 'js-base64';
import { CusButton } from '@/components/common/button/index';
import { CusInput } from '@/components/common/input/index';
import { CusFormItem } from '@/components/common/form/index';

function mapStateToProps(state) {
  return {
    user: state.account.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ ...AccountActions }, dispatch),
  };
}

function Login(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const login = () => {
    let submitPassword = Base64.encode('@GZzib!' + password);
    api.account_v1_login_post({ setting: { loading: true }, data: { phoneNum: userName, passwd: submitPassword } }).then(({ data: { user } }) => {
      props.updateUserInfo(user);
    });
  };
  const inputHandleChange = (name, value) => {
    switch (name) {
      case 'userName':
        setUserName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
    }
  };
  return (
    <Container className='login'>
      <Title>账号密码登录</Title>
      <CusFormItem rule={{ required: true, message: '请输入活动名称', trigger: 'blur' }} >
        <CusInput style={CusInputCss}  value={userName} handleChange={inputHandleChange.bind(this, 'userName')} title='用户名' placeholder='请输入用户名'></CusInput>
      </CusFormItem>
      <CusInput style={CusInputCss} value={password} handleChange={inputHandleChange.bind(this, 'password')} title='密码' placeholder='请输入密码'></CusInput>
      <CusButton onClick={login} type='primary'>
        登录
      </CusButton>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 480px;
  display: flex;
  flex-direction: column;
  padding: 32px 30px;
  box-sizing: border-box;
`;
const Title = styled.h1`
  color: #4e9df6;
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 48px;
`;

const CusInputCss = {
  marginBottom: '20px',
};
