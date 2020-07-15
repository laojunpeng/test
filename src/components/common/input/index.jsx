import React from 'react';
import styled from '@/utils/styled-px2vw';
import { useEffect } from 'react';

function Index({ type = 'text',style, title, prepend, icon,...otherProps }) {
  const handleChange = function (e,...test) {
    otherProps.handleChange&&otherProps.handleChange(e.target.value)
  };
  const handleFocus = function () {};
  const handleBlur = function () {};

  return (
    <CusInput style={style}>
      {typeof title === 'string' ? <Title>{title}</Title> : title}
      <Wrapper>
        {typeof icon === 'string' ? <Icon className={`cus-input__icon el-icon-${icon}`} onClick={this.handleIconClick.bind(this)}></Icon> : icon}
        <Input {...otherProps} type={type} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
      </Wrapper>
    </CusInput>
  );
}

export default Index;

const CusInput = styled.div``;
const Title = styled.h2`
  font-size: 16px;
  color: #4d4d4d;
  margin-bottom: 10px;
`;
const Wrapper = styled.div`
  font-size: 16px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex: 1 1 auto;
  padding: 13px 12px 11px 0;
  background: #f7f8fa;
`;
const Input = styled.input`
  display: block;
  line-height: 24px;
  color: #244352;
  flex: 1 1 auto;
  font-size: 14px;
  padding-left: 12px;
  background: #f7f8fa;
  ::-webkit-input-placeholder {
    color: #d0d0d0;
  }
`;

const Icon = styled.div`
  display: block;
  width: 24px;
  height: 24px;
  flex: 0 0 auto;
  margin-left: 16px;
`;
