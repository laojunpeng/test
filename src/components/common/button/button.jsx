import React from 'react';
import styled, { css } from '@/utils/styled-px2vw';

function Button({ type = 'primary', disabled = false, loading = false, onClick, ...props }) {
  // const { type = 'primary' } = props;
  // const { disabled = false } = props;
  const emit = function (e) {
    !loading && onClick && onClick();
  };
  return (
    <Container onClick={emit} cusLoading={loading} disabled={disabled} type={BUTTON_TYPE[type]}>
      {loading ? '请稍后' : props.children}
    </Container>
  );
}

export default Button;

const BUTTON_TYPE = {
  primary: {
    background: '#74b3fa',
    color: '#fff',
    border: '1px solid #74b3fa',
  },
  secondary: {
    background: '#FFFFFF',
    color: '#000000',
    border: '1px solid #000000',
  },
};

Button.type = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const Default = styled.div`
  height: 48px;
  line-height: 48px;
  text-align: center;
  border-radius: 8px;
  width: 100%;
  font-size: 16px;
  display: block;
  transition: all 0.3s;
  background: '#74b3fa';
  color: #fff;
  box-sizing: border-box;
`;

const Disabled = css`
  background: #c7c7cd;
  color: #fff;
  border: 1px solid #c7c7cd;
`;

const Loading = css``;

const Container = styled(Default)`
  ${(props) => props.type}
  ${(props) => props.cusLoading && Loading}
  ${(props) => props.disabled && Disabled}
`;
