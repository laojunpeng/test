import React, { useState, useEffect } from 'react';
import * as api from '@/api';
import styled from '@/utils/styled-px2vw';
import { connect } from 'react-redux'; //引入连接器
import { isEmpty } from 'lodash';
import { CusDialog } from '@/components/common/dialog/index';

function mapStateToProps(state) {
  return {
    user: state.account.user,
  };
}

function Join(props) {
  let membersTotal = 0;
  let appId = 10007;
  let deviceId = 'A12DC2BQ142DHNV6';
  const devicePic = {
    10007: '/images/family/join/1c.png',
  };
  const headers = {
    appId: appId,
    deviceId: deviceId,
    deviceType: 'robot',
  };
  const [memberData, setMemberData] = useState({ content: [], total: 0 });
  const [isBind, setIsBind] = useState(false);
  const [examineStatusTips, setExamineStatusTips] = useState('加入家庭,与宝宝共同成长');
  const [deviceInfo, setDeviceInfo] = useState({
    profilePicture: devicePic[appId] || '/images/family/join/1c.png',
    name: '小智伴',
  });
  const [isDialogShow, setDialogShow] = useState(false);

  function getDeviceInfo() {
    api
      .device_v1_info_sn_sn_get({
        headers: {
          deviceId: deviceId,
        },
        path: {
          sn: deviceId,
        },
      })
      .then(({ code, data }) => {
        if (code === 200) setDeviceInfo(Object.assign({}, deviceInfo, { name: data.name || '小智伴' }));
      });
  }
  function getMemberData() {
    api
      .api_v3_device_info_members_deviceId_post({
        headers: {
          // appId: this.appId,
          deviceId,
        },
        path: {
          deviceId,
        },
      })
      .then(({ code, data }) => {
        //  console.info(e,"设备成员信息")
        // 仅显示加入家庭成员信息，审核状态examine 1:通过
        code === 200 && setMemberData(data);
      });
  }
  function getDeviceMembersTotal() {
    api
      .api_v3_device_info_members_total_deviceId_get({
        headers: {
          deviceId,
        },
        path: {
          deviceId,
        },
      })
      .then(({ data }) => {
        membersTotal = Number(data) || 0;
        checkBindStatus();
      });
  }
  function checkBindStatus() {
    api
      .api_v3_device_info_search_exists_post({
        headers: {
          appId,
          deviceId,
        },
        data: {
          ...headers,
          userUid: props.user.uid,
        },
      })
      .then((e) => {
        let flag = e.code ? e.data : e;
        // 现有家庭成员已满10个（包含正在申请加入的用户），toast：当前家庭成员已满
        // 审核状态0:待审核 1:通过 2:不通过, (自定义)3:满员
        let examineStatus = !flag && membersTotal >= 10 ? 3 : getExamineStatus();
        const textArr = ['你已申请加入家庭，请耐心等待管理员审核', '你已经加入该家庭', '审核不通过，请重新申请', '当前家庭成员已满，期待您对宝宝的关心'];
        if (textArr[examineStatus]) {
          setExamineStatusTips(textArr[examineStatus]);
          setIsBind(examineStatus > 1);
        }else{
          setIsBind(flag)
        }
      });
  }
  async function getExamineStatus() {
    // 审核状态0:待审核 1:通过 2:不通过 不传默认为1
    const statusArr = [0, 1, 2];
    let result = (i) => {
      return api.api_v3_device_info_search_post({
        // header的当前用户的信息
        headers: {
          appId: appId,
          deviceId: deviceId,
        },
        data: {
          ...headers,
          examine: i,
          userUid: props.user.uid,
        },
      });
    };
    for (let i = 0; i < statusArr.length; i++) {
      let { data } = await result(statusArr[i]);
      if (data) {
        return data.examine;
      }
    }
    return null;
  }
  function joinHandler() {
    setDialogShow(true);
  }
  useEffect(() => {
    if (isEmpty(props.user)) return;
    getMemberData();
    getDeviceInfo();
    getDeviceMembersTotal();
  }, [props.user]);
  return (
    <Wrapper className='family-join'>
      <Header className='header-box'>
        <Container>
          <img className='device-img' src={deviceInfo.profilePicture} alt=''></img>
          <UserInfo className='userInfo'>
            <p className='userName'>{deviceInfo.name}</p>
            <p className='slogan'>邀请你加入TA的家庭</p>
          </UserInfo>
        </Container>
      </Header>
      <img className='banner' src='/images/family/join/join0.png' alt='' />
      <div className='title'>
        <img className='title-star' src='/images/family/join/join1.png' alt='' />
        <img className='title-text' src='/images/family/join/join2.png' alt='' />
      </div>
      <Content>
        {!!memberData.total &&
          memberData.content.map((item) => {
            return (
              <li key={item.id}>
                <img src={item.profilePicture || '/images/member_default.png'} alt='' />
                <span>{item.nickName}</span>
              </li>
            );
          })}
      </Content>
      <Footer>
        <Button className={isBind ? null : 'active'} onClick={joinHandler}>
          {examineStatusTips}
        </Button>
      </Footer>
      {isDialogShow && (
        <CusDialog
          isShow={isDialogShow}
          title='你已经加入该家庭'
          content='是否打开智伴优学APP？'
          cancel={{ text: '再看看' }}
          confirm={{ text: '打开' }}
          onCancel={() => {
            window.location.reload();
          }}></CusDialog>
      )}
    </Wrapper>
  );
}
export default connect(mapStateToProps)(Join);

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #56b2fc;
  .banner {
    display: block;
    width: 100%;
  }
  .title {
    margin: 3px 0 12px 15px;
  }
  .title-star {
    width: 25px;
    margin-right: 5px;
  }
  .title-text {
    width: 73px;
  }
`;
const Header = styled.div`
  padding: 18px 16px;
  background: linear-gradient(180deg, rgba(117, 193, 254, 1) 0%, rgba(102, 185, 254, 1) 100%);
`;

const Container = styled.div`
  height: 64px;
  background: rgba(0, 62, 163, 0.2);
  display: flex;
  border-radius: 8px;
  padding: 9px 0 9px 16px;
  color: #fff;
  .device-img {
    width: 46px;
    height: 46px;
    border: 2px solid rgba(255, 255, 255, 1);
    border-radius: 100%;
    margin-right: 8px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  p {
    display: block;
    width: 100%;
  }
  .userName {
    height: 25px;
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
  }
  .slogan {
    height: 20px;
    font-size: 14px;
    color: rgba(255, 255, 255, 1);
    line-height: 20px;
  }
`;

const Content = styled.ul`
  padding-left: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  li {
    margin-right: 13px;
    margin-bottom: 10px;
    padding: 0 8px;
    height: 30px;
    background: rgba(0, 62, 163, 0.2);
    border-radius: 15px;
    font-size: 13px;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  img {
    display: block;
    width: 22px;
    height: 22px;
    border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 100%;
    margin-right: 2px;
  }
  span {
    display: block;
    height: 15px;
    max-width: 78px;
    font-size: 13px;
    line-height: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
const Footer = styled.div`
  text-align: center;
  margin-top: 8px;
`;

const Button = styled.div`
  margin: 0 auto;
  width: 343px;
  height: 53px;
  background-image: url('/images/family/join/join4.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: inherit;
  font-size: 16px;
  line-height: 50px;
  font-weight: bold;
  color: #fff;
  &.active {
    background-image: url('/images/family/join/join3.png');
    background-repeat: no-repeat;
    background-color: inherit;
    color: #fff;
    color: rgba(124, 54, 28, 1);
  }
`;
