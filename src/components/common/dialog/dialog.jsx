import React from 'react';
import styled, { keyframes } from '@/utils/styled-px2vw';

function Dialog({ isShow=false, type='confirm', title='', content='', confirm={}, cancel={} , onConfirm, onCancel, ...props }) {
const cancelEmit = function (e) {
    onCancel && onCancel();
};
const confirmEmit = function (e) {
    onConfirm && onConfirm();
    };
return (
<Wrapper>
    <Mask></Mask>
  <Container className={isShow?'isShow':'isHide'}>
    <Content>
      <h5>{title}</h5>
      <h6>{content}</h6>
    </Content>
    <ButtonBox>
      <CancelBtn className='btn' onClick={cancelEmit}>{cancel.text}</CancelBtn>
      <ConfirmBtn className='btn' onClick={confirmEmit}>{confirm.text}</ConfirmBtn>
    </ButtonBox>
  </Container>
</Wrapper>
);
}

export default Dialog

const Wrapper = styled.div`
position: fixed;
left: 0;
right: 0;
top: 0;
bottom: 0;
z-index: 100;
`
const Mask = styled.div`
position: absolute;
width: 100%;
height: 100vh;
overflow: hidden;
background-color: #25262d;
opacity: 0.4;
`
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`
const Container = styled.div`
position: absolute;
top: 50%;
left: 50%;
max-width: 100%;
transform: translate(-50%, -50%);
width: 270px;
padding: 0;
text-align: center;
overflow: hidden;
border-radius: 0.53333vw;
background-color: #fff;
animation: 0.2s ${fadeIn} ease-out;
`
const Content = styled.div`
h5{
    margin: 30px 16px 0;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 400;
}
h6{
    margin: 16px 0;
    color: #666;
    font-size: 3.73333vw;
    line-height: 5.86667vw;
    font-weight: 400;

}
`
const ButtonBox = styled.div`
display: flex;
border-top: 1px solid #e8e7e7;
.btn{
    flex: 1;
    padding: 17px 10px;
    margin: 0;
    font-size: 10px;
    line-height: 1;
    text-align: center;
    background-color: #fff; 
}
.btn+.btn{
    border-left: 0.5px solid #e8e7e7;
}
`
const CancelBtn = styled.div`
color: #999;
`
const ConfirmBtn = styled.div`
color: #3f8dfd;
`
