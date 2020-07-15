import instance from './instance';
import { convertRESTAPI } from './util';

/** 创建绑定设备信息(只支持终端授权方式) */
function api_v3_device_info_post(opts) {
  return instance({
    method: "post",
    url: "/api/v3/device/info",
    opts: opts
  })
}

/** 根据条件查询绑定设备信息 */
function api_v3_device_info_search_post(opts) {
  return instance({
    method: 'post',
    url: '/api/v3/device/info/search',
    opts: opts
  })
}

/** 根据条件查询绑定设备信息是否存在 */
function api_v3_device_info_search_exists_post(opts) {
  return instance({
    method: "post",
    url: "/api/v3/device/info/search/exists",
    opts: opts
  });
}

/** 获取绑定设备的成员数量*/
function api_v3_device_info_members_total_deviceId_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/api/v3/device/info/members/total/{deviceId}', opts),
    opts: opts
  })
}

/** 查询设备信息*/
function device_v1_info_sn_sn_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/device/v1/info/sn/{sn}', opts),
    opts: opts
  })
}

/** 查询绑定设备的全部用户的信息 */
function api_v3_device_info_members_deviceId_post(opts) {
  return instance({
    method: "get",
    url: convertRESTAPI("/api/v3/device/info/members/{deviceId}",opts),
    opts: opts
  });
}

/** 获取用户下级(粉丝) */
function account_v1_user_chain_junior_phoneNum_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/account/v1/user/chain/junior/{phoneNum}', opts),
    opts: opts
  });
}

/** 转组 */
function account_v1_user_chain_move_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/user/chain/move',
    opts: opts
  });
}

/** 根据手机号获取用户信息和上级基础信息 */
function account_v1_user_chain_superior_phoneNum_post(opts) {
  return instance({
    method: 'post',
    url: convertRESTAPI('/account/v1/user/chain/superior/{phoneNum}', opts),
    opts: opts
  });
}

/** 根据邀请码获取用户信息 */
function account_v1_user_code_code_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/account/v1/user/code/{code}', opts),
    opts: opts
  });
}

/** 根据id获取用户基础信息 */
function account_v1_user_id_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/account/v1/user/{id}', opts),
    opts: opts
  });
}

/** 查询注销状态 */
function account_v1_user_cancellation_check_get(opts) {
  return instance({
    method: 'get',
    url:  '/account/v1/user/cancellation/check',
    opts: opts
  });
}

/** 绑定设备(强关系) */
function account_v1_user_chain_bind_sn_sn_post(opts) {
  return instance({
    method: 'post',
    url: convertRESTAPI('/account/v1/user/chain/bind/sn/{sn}', opts),
    opts: opts
  });
}

/** 根据邀请码绑定上级(不自动升级) */
function account_v1_user_chain_bindNotUpdate_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/user/chain/bindNotUpdate',
    opts: opts
  });
}

/** 购买课程(绑定弱关系) */
function account_v1_user_chain_course_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/user/chain/course',
    opts: opts
  });
}

/** 初始化关系链用户 */
function account_v1_user_chain_init_phoneNum_post(opts) {
  return instance({
    method: 'post',
    url: convertRESTAPI('/account/v1/user/chain/init/{phoneNum}', opts),
    opts: opts
  });
}

/** 获取用户上级信息 */
function account_v1_user_chain_invite_uid_uid_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/account/v1/user/chain/invite/uid/{uid}', opts),
    opts: opts
  });
}

/** 用户注销申请 */
function account_v1_user_cancellation_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/user/cancellation',
    opts: opts
  });
}

/** 撤销审核 */
function account_v1_user_cancellation_cancel_put(opts) {
  return instance({
    method: 'put',
    url:  '/account/v1/user/cancellation/cancel',
    opts: opts
  });
}

/** 用户详细信息 */
function account_v1_sys_user_id_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/account/v1/sys/user/{id}', opts),
    opts: opts
  });
}

/** 添加地址信息 */
function account_v1_user_address_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/user/address',
    opts: opts
  });
}

/** 编辑地址信息 */
function account_v1_user_address_id_put(opts) {
  return instance({
    method: 'put',
    url: convertRESTAPI('/account/v1/user/address/{id}', opts),
    opts: opts
  });
}

/** 根据uid获取用户地址列表 */
function account_v1_user_address_uid_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/account/v1/user/address/{uid}', opts),
    opts: opts
  });
}

/** 根据设备号获取用户信息 */
function account_v1_rcs_user_device_deviceId_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/account/v1/rcs/user/device/{deviceId}', opts),
    opts: opts
  });
}

/** 重置密码 */
function account_v1_rcs_user_reset_passwd_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/rcs/user/reset/passwd',
    opts: opts
  });
}

/** 禁用帐号 */
function account_v1_sys_user_block_id_put(opts) {
  return instance({
    method: 'put',
    url: convertRESTAPI('/account/v1/sys/user/block/{id}', opts),
    opts: opts
  });
}

/** 审核列表 */
function account_v1_sys_user_cancellation_get(opts) {
  return instance({
    method: 'get',
    url:  '/account/v1/sys/user/cancellation',
    opts: opts
  });
}

/** 审核 */
function account_v1_sys_user_cancellation_verify_put(opts) {
  return instance({
    method: 'put',
    url:  '/account/v1/sys/user/cancellation/verify',
    opts: opts
  });
}

/** 关系链用户列表 */
function account_v1_sys_user_chain_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/account/v1/sys/user/chain/list',
    opts: opts
  });
}

/** 用户列表 */
function account_v1_sys_user_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/account/v1/sys/user/list',
    opts: opts
  });
}

/** 启用帐号 */
function account_v1_sys_user_unblock_id_put(opts) {
  return instance({
    method: 'put',
    url: convertRESTAPI('/account/v1/sys/user/unblock/{id}', opts),
    opts: opts
  });
}

/** 经销商注册 */
function account_v1_rcs_user_agent_register_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/rcs/user/agent/register',
    opts: opts
  });
}

/** 更换绑定手机号 */
function account_v1_rcs_user_change_bind_phoneNum_post(opts) {
  return instance({
    method: 'post',
    url: convertRESTAPI('/account/v1/rcs/user/change/bind/{phoneNum}', opts),
    opts: opts
  });
}

/** 新增用户关系链反馈 */
function api_v3_chain_feedback_post(opts) {
  return instance({
    method: 'post',
    url:  '/api/v3/chain/feedback',
    opts: opts
  });
}

/** 根据邀请码绑定上级 */
function account_v1_user_chain_bind_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/user/chain/bind',
    opts: opts
  });
}

/** 校验accessToken并获取用户信息 */
function account_v1_user_token_verify_get(opts) {
  return instance({
    method: 'get',
    url:  '/account/v1/user/token/verify',
    opts: opts
  });
}

/** 根据邀请码获取用户信息 */
function account_v1_user_code_code_post(opts) {
  return instance({
    method: 'post',
    url: convertRESTAPI('/account/v1/user/code/{code}', opts),
    opts: opts
  });
}

/**  查询媒体分页 */
function api_v3_media_search_page_post(opts) {
  return instance({
    method: 'post',
    url:  '/api/v3/media/search/page',
    opts: opts
  });
}

/** 查询媒体分页(包含增强属性) */
function api_v3_media_search_page_with_pluses_post(opts) {
  return instance({
    method: 'post',
    url: convertRESTAPI('/api/v3/media/search/page/with/{pluses}', opts),
    opts: opts
  });
}

/**  获取播放器数据 */
function api_v3_mediasByRemarks_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/v3/mediasByRemarks',
    opts: opts
  });
}

/** 根据第三方id集合查询音频集合 */
function api_v3_mediasByRemarks_post(opts) {
  return instance({
    method: 'post',
    url:  '/api/v3/mediasByRemarks',
    opts: opts
  });
}

/** 智豆商品列表 */
function payment_v1_goods_zhibean_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/goods/zhibean/list',
    opts: opts
  });
}

/** 获取用户智豆记录 */
function integral_v1_zhibean_get_uid_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/integral/v1/zhibean/get/{uid}', opts),
    opts: opts
  });
}

/** 获取用户上级信息 */
function account_v1_user_chain_invite_phoneNum_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/account/v1/user/chain/invite/{phoneNum}', opts),
    opts: opts
  });
}

/** 阅读记录分页 */
function api_v3_book_record_list_post(opts) {
  return instance({
    method: 'post',
    url:  '/api/v3/book/record/list',
    opts: opts
  });
}

/** 根据绘本唯一码查询绘本 */
function api_v3_book_code_code_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/api/v3/book/code/{code}', opts),
    opts: opts
  });
}

/** 阅读报告 */
function api_v3_book_record_report_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/v3/book/record/report',
    opts: opts
  });
}

/** 宝宝最喜欢的书 */
function api_v3_book_record_favor_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/v3/book/record/favor',
    opts: opts
  });
}

/** 获取智能专辑详情 */
function resource_v1_user_member_package_smart_album_get(opts) {
  return instance({
    method: 'get',
    url:  '/resource/v1/user/member/package/smart/album',
    opts: opts
  });
}

/** 查询用户是否购买该专辑 */
function resource_v1_user_album_check_buy_get(opts) {
  return instance({
    method: 'get',
    url:  '/resource/v1/user/album/check/buy',
    opts: opts
  });
}

/** 会员礼包推荐专辑 */
function payment_v1_goods_member_package_recommend_album_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/goods/member/package/recommend/album/list',
    opts: opts
  });
}

/** 根据用户uid获取最新评测结果 */
function qms_v1_answer_result_last_uid_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/qms/v1/answer/result/last/{uid}', opts),
    opts: opts
  });
}

/** 判断用户是否可答题 */
function qms_v1_answer_decide_get(opts) {
  return instance({
    method: 'get',
    url:  '/qms/v1/answer/decide',
    opts: opts
  });
}

/** 提交答案 */
function qms_v1_answer_post(opts) {
  return instance({
    method: 'post',
    url:  '/qms/v1/answer',
    opts: opts
  });
}

/** 根据id获取问卷 */
function qms_v1_questionnaire_id_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/qms/v1/questionnaire/{id}', opts),
    opts: opts
  });
}

/** 根据uid获取用户优惠券列表 */
function payment_v1_ticket_list_detail_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/ticket/list/detail',
    opts: opts
  });
}

/** 资源鉴权 */
function resource_v1_auth_album_check_get(opts) {
  return instance({
    method: 'get',
    url:  '/resource/v1/auth/album/check',
    opts: opts
  });
}

/** 获取专辑列表 */
function api_v3_albumPage_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/v3/albumPage',
    opts: opts
  });
}

/** 根据多个手机号获取用户详细信息 */
function account_v1_user_phone_array_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/user/phone/array',
    opts: opts
  });
}

/** 判断手机号是否注册 */
function account_v1_register_determine_phone_phoneNum_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/account/v1/register/determine/phone/{phoneNum}', opts),
    opts: opts
  });
}

/** 根据邀请码成为邀请人粉丝 */
function account_v1_user_fans_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/user/fans',
    opts: opts
  });
}

/** 根据用户uid获取粉丝列表 */
function account_v1_user_fans_list_uid_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/account/v1/user/fans/list/{uid}', opts),
    opts: opts
  });
}

/** 根据多个id获取用户详细信息 */
function account_v1_user_id_array_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/user/id/array',
    opts: opts
  });
}

/** 根据用户uid获取邀请人信息 */
function account_v1_user_fans_determine_invite_uid_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/account/v1/user/fans/determine/invite/{uid}', opts),
    opts: opts
  });
}

/** 校验accessToken */
function account_v1_user_check_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/user/check',
    opts: opts
  });
}

/** 获取微信签名 */
function api_v3_wechat_js_sign_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/v3/wechat/js/sign',
    opts: opts
  });
}

/** 获取专辑 */
function api_v3_album_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/v3/album',
    opts: opts
  });
}

/** 获取音频列表 */
function api_v3_mediaPage_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/v3/mediaPage',
    opts: opts
  });
}

/** 根据编号或唯一码获取音频 */
function api_v3_media_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/v3/media',
    opts: opts
  });
}

/** 领取卡券 */
function payment_v1_ticket_record_user_take_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/ticket/record/user/take',
    opts: opts
  });
}

/** 根据ID获取卡券种类 */
function payment_v1_ticket_id_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/payment/v1/ticket/{id}', opts),
    opts: opts
  });
}

/** update */
function payment_v1_ticket_device_record_edit_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/ticket/device/record/edit',
    opts: opts
  });
}

/** getByDeviceId */
function payment_v1_ticket_device_record_get_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/ticket/device/record/get',
    opts: opts
  });
}

/** 创建或更新 */
function payment_v1_ticket_edit_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/ticket/edit',
    opts: opts
  });
}

/** 卡券种类列表 */
function payment_v1_ticket_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/ticket/list',
    opts: opts
  });
}

/** 创建或更新 */
function payment_v1_ticket_record_edit_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/ticket/record/edit',
    opts: opts
  });
}

/** 卡券列表 */
function payment_v1_ticket_record_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/ticket/record/list',
    opts: opts
  });
}

/** 根据卡券码获取信息 */
function payment_v1_ticket_record_num_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/ticket/record/num',
    opts: opts
  });
}

/** 将卡券设置为[已使用] */
function payment_v1_ticket_record_status_used_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/ticket/record/status/used',
    opts: opts
  });
}

/** 删除VIP产品 */
function payment_v1_product_vip_delete_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/product/vip/delete',
    opts: opts
  });
}

/** 创建或更新 */
function payment_v1_product_vip_edit_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/product/vip/edit',
    opts: opts
  });
}

/** VIP产品列表 */
function payment_v1_product_vip_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/product/vip/list',
    opts: opts
  });
}

/** 根据ID获取信息 */
function payment_v1_product_vip_id_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/payment/v1/product/vip/{id}', opts),
    opts: opts
  });
}

/** 创建或更新 */
function payment_v1_ticket_config_edit_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/ticket/config/edit',
    opts: opts
  });
}

/** 卡券配置列表 */
function payment_v1_ticket_config_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/ticket/config/list',
    opts: opts
  });
}

/** 根据ID获取配置信息 */
function payment_v1_ticket_config_id_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/payment/v1/ticket/config/{id}', opts),
    opts: opts
  });
}

/** 软删除 */
function payment_v1_ticket_delete_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/ticket/delete',
    opts: opts
  });
}

/** 订单详情 */
function payment_v1_order_id_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/payment/v1/order/{id}', opts),
    opts: opts
  });
}

/** 获取授权URL */
function payment_v1_pay_wx_auth_url_get_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/pay/wx/auth/url/get',
    opts: opts
  });
}

/** authCheck */
function payment_v1_product_member_package_auth_check_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/product/member/package/auth/check',
    opts: opts
  });
}

/** 会员礼包详情 */
function payment_v1_product_member_package_detail_id_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/payment/v1/product/member/package/detail/{id}', opts),
    opts: opts
  });
}

/** take */
function payment_v1_product_member_package_draw_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/product/member/package/draw',
    opts: opts
  });
}

/** getByDeviceId */
function payment_v1_product_member_package_draw_status_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/product/member/package/draw/status',
    opts: opts
  });
}

/** 会员礼包添加/编辑 */
function payment_v1_product_member_package_edit_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/product/member/package/edit',
    opts: opts
  });
}

/** 会员礼包列表 */
function payment_v1_product_member_package_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/product/member/package/list',
    opts: opts
  });
}

/** 会员礼包导出excel */
function payment_v1_order_member_package_export_excel_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/order/member/package/export/excel',
    opts: opts
  });
}

/** 会员礼包订单列表 */
function payment_v1_order_member_package_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/order/member/package/list',
    opts: opts
  });
}

/** 会员礼包销售情况 */
function payment_v1_order_member_package_sale_situation_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/order/member/package/sale/situation',
    opts: opts
  });
}

/** 更新订单 */
function payment_v1_order_update_id_post(opts) {
  return instance({
    method: 'post',
    url: convertRESTAPI('/payment/v1/order/update/{id}', opts),
    opts: opts
  });
}

/** 创建微信H5订单 */
function payment_v1_order_wechat_h5_order_create_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/order/wechat/h5/order/create',
    opts: opts
  });
}

/** 创建微信JSAPI订单 */
function payment_v1_order_wechat_jsapi_order_create_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/order/wechat/jsapi/order/create',
    opts: opts
  });
}

/** 创建智豆支付订单 */
function payment_v1_order_zhiBean_order_create_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/order/zhiBean/order/create',
    opts: opts
  });
}

/** 创建支付宝订单 */
function payment_v1_order_createAliOrder_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/order/createAliOrder',
    opts: opts
  });
}

/** 创建微信订单 */
function payment_v1_order_createWxOrder_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/order/createWxOrder',
    opts: opts
  });
}

/** 导出订单列表Excel */
function payment_v1_order_exportExcel_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/order/exportExcel',
    opts: opts
  });
}

/** 根据订单号获取详情 */
function payment_v1_order_get_order_detail_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/order/get/order/detail',
    opts: opts
  });
}

/** 用户订单列表 */
function payment_v1_order_getOrderList_uid_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/payment/v1/order/getOrderList/{uid}', opts),
    opts: opts
  });
}

/** 订单列表 */
function payment_v1_order_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/order/list',
    opts: opts
  });
}

/** 会员礼包订单详情 */
function payment_v1_order_member_package_detail_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/order/member/package/detail',
    opts: opts
  });
}

/** 会员礼包分成信息 */
function payment_v1_order_member_package_divide_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/order/member/package/divide/list',
    opts: opts
  });
}

/** 会员权益编辑权益 */
function payment_v1_goods_member_list_rights_contents_edit_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/goods/member/list/rights/contents/edit',
    opts: opts
  });
}

/** 会员礼包编辑会员权益 */
function payment_v1_goods_member_list_rights_edit_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/goods/member/list/rights/edit',
    opts: opts
  });
}

/** 获取只关联1张专辑的资源商品列表 */
function payment_v1_goods_resource_goods_one_album_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/goods/resource/goods/one/album/list',
    opts: opts
  });
}

/** 会员权益添加课程 */
function payment_v1_goods_rights_course_add_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/goods/rights/course/add',
    opts: opts
  });
}

/** 会员权益删除课程 */
function payment_v1_goods_rights_course_del_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/goods/rights/course/del',
    opts: opts
  });
}

/** 商品编辑 */
function payment_v1_goods_update_id_post(opts) {
  return instance({
    method: 'post',
    url: convertRESTAPI('/payment/v1/goods/update/{id}', opts),
    opts: opts
  });
}

/** 商品详情 */
function payment_v1_goods_id_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/payment/v1/goods/{id}', opts),
    opts: opts
  });
}

/** 批量关闭订单 */
function payment_v1_order_batchClose_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/order/batchClose',
    opts: opts
  });
}

/** 获取商品号 */
function payment_v1_goods_getGoodsNum_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/goods/getGoodsNum',
    opts: opts
  });
}

/** 添加关联商品 */
function payment_v1_goods_link_goods_add_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/goods/link/goods/add',
    opts: opts
  });
}

/** 删除关联商品 */
function payment_v1_goods_link_goods_delete_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/goods/link/goods/delete',
    opts: opts
  });
}

/** 获取商品的关联商品列表 */
function payment_v1_goods_link_goods_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/goods/link/goods/list',
    opts: opts
  });
}

/** 商品列表 */
function payment_v1_goods_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/goods/list',
    opts: opts
  });
}

/** 会员礼包添加会员权益 */
function payment_v1_goods_member_list_rights_add_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/goods/member/list/rights/add',
    opts: opts
  });
}

/** 会员权益添加权益 */
function payment_v1_goods_member_list_rights_contents_add_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/goods/member/list/rights/contents/add',
    opts: opts
  });
}

/** 会员权益删除权益 */
function payment_v1_goods_member_list_rights_contents_del_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/goods/member/list/rights/contents/del',
    opts: opts
  });
}

/** 添加商品 */
function payment_v1_goods_add_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/goods/add',
    opts: opts
  });
}

/** 专辑所属会员礼包 */
function payment_v1_goods_album_member_package_get_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/goods/album/member/package/get',
    opts: opts
  });
}

/** 根据商品号获取商品详情（APP端用） */
function payment_v1_goods_app_goodsNum_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/payment/v1/goods/app/{goodsNum}', opts),
    opts: opts
  });
}

/** 批量添加商品 */
function payment_v1_goods_bacth_add_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/goods/bacth/add',
    opts: opts
  });
}

/** 商品批量修改出售 */
function payment_v1_goods_batchSale_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/goods/batchSale',
    opts: opts
  });
}

/** 商品删除 */
function payment_v1_goods_delete_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/goods/delete',
    opts: opts
  });
}

/** 会员续费 */
function mms_v1_member_update_post(opts) {
  return instance({
    method: 'post',
    url:  '/mms/v1/member/update',
    opts: opts
  });
}

/** 验证验证码 */
function mms_v1_ticket_activate_check_code_uid_post(opts) {
  return instance({
    method: 'post',
    url: convertRESTAPI('/mms/v1/ticket/activate/check/code/{uid}', opts),
    opts: opts
  });
}

/** 获取验证码 */
function mms_v1_ticket_activate_code_uid_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/mms/v1/ticket/activate/code/{uid}', opts),
    opts: opts
  });
}

/** 验证验证码 */
function mms_v1_ticket_activate_exchange_member_package_uid_post(opts) {
  return instance({
    method: 'post',
    url: convertRESTAPI('/mms/v1/ticket/activate/exchange/member/package/{uid}', opts),
    opts: opts
  });
}

/** 卡券兑换 */
function mms_v1_ticket_activate_exchange_uid_post(opts) {
  return instance({
    method: 'post',
    url: convertRESTAPI('/mms/v1/ticket/activate/exchange/{uid}', opts),
    opts: opts
  });
}

/** 领取会员礼包 */
function mms_v1_ticket_activate_member_package_draw_uid_post(opts) {
  return instance({
    method: 'post',
    url: convertRESTAPI('/mms/v1/ticket/activate/member/package/draw/{uid}', opts),
    opts: opts
  });
}

/** 会员购买 */
function mms_v1_member_add_post(opts) {
  return instance({
    method: 'post',
    url:  '/mms/v1/member/add',
    opts: opts
  });
}

/** 会员查询 */
function mms_v1_member_query_uid_post(opts) {
  return instance({
    method: 'post',
    url: convertRESTAPI('/mms/v1/member/query/{uid}', opts),
    opts: opts
  });
}

/** 获取权益下的内容列表 */
function payment_v1_goods_rights_contents_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/goods/rights/contents/list',
    opts: opts
  });
}

/** 获取会员礼包商品的权益列表 */
function payment_v1_goods_rights_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/goods/rights/list',
    opts: opts
  });
}

/** 智豆支付 */
function payment_v1_pay_zhiBeanPay_post(opts) {
  return instance({
    method: 'post',
    url:  '/payment/v1/pay/zhiBeanPay',
    opts: opts
  });
}

/** 智豆支付前确认 */
function payment_v1_pay_check_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/pay/check',
    opts: opts
  });
}

/** 会员礼包下的资源列表（APP端用） */
function payment_v1_goods_member_package_link_goods_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/goods/member/package/link/goods/list',
    opts: opts
  });
}

/** 会员礼包列表（APP端用） */
function payment_v1_goods_member_package_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/goods/member/package/list',
    opts: opts
  });
}

/** 资源商品下的专辑列表（APP端用） */
function payment_v1_goods_member_package_album_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/goods/member/package/album/list',
    opts: opts
  });
}

/** 根据手机号获取用户信息 */
function account_v1_user_phone_phoneNum_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/account/v1/user/phone/{phoneNum}', opts),
    opts: opts
  });
}

/** 重置密码 */
function account_v1_user_reset_passwd_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/user/reset/passwd',
    opts: opts
  });
}

/** 根据UID获取用户信息 */
function account_v1_user_uid_uid_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/account/v1/user/uid/{uid}', opts),
    opts: opts
  });
}

/** agentSync */
function account_v1_user_agent_sync_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/user/agent/sync',
    opts: opts
  });
}

/** check */
function account_v1_user_check_get(opts) {
  return instance({
    method: 'get',
    url:  '/account/v1/user/check',
    opts: opts
  });
}

/** 编辑用户信息 */
function account_v1_user_detail_edit_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/user/detail/edit',
    opts: opts
  });
}

/** 根据多个id获取用户详细信息 */
function account_v1_user_id_array_get(opts) {
  return instance({
    method: 'get',
    url:  '/account/v1/user/id/array',
    opts: opts
  });
}

/** 根据用户name查询uid */
function account_v1_user_name_get(opts) {
  return instance({
    method: 'get',
    url:  '/account/v1/user/name',
    opts: opts
  });
}

/** 根据多个手机号获取用户详细信息 */
function account_v1_user_phone_array_get(opts) {
  return instance({
    method: 'get',
    url:  '/account/v1/user/phone/array',
    opts: opts
  });
}

/** 退出 */
function account_v1_logout_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/logout',
    opts: opts
  });
}

/** 注册 */
function account_v1_register_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/register',
    opts: opts
  });
}

/** 判断手机号是否注册 */
function account_v1_register_determine_phone_phoneNum_post(opts) {
  return instance({
    method: 'post',
    url: convertRESTAPI('/account/v1/register/determine/phone/{phoneNum}', opts),
    opts: opts
  });
}

/** 校验短信验证码 */
function account_v1_sms_check_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/sms/check',
    opts: opts
  });
}

/** 短信登录 */
function account_v1_sms_login_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/sms/login',
    opts: opts
  });
}

/** 发送短信 */
function account_v1_sms_send_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/sms/send',
    opts: opts
  });
}

/** 第三方登录 */
function account_v1_third_login_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/third/login',
    opts: opts
  });
}

/** 第三方绑定智伴帐号 */
function account_v1_bind_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/bind',
    opts: opts
  });
}

/** 游客登录 */
function account_v1_guest_login_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/guest/login',
    opts: opts
  });
}

/** index */
function account_v1_im_phone_phoneNum_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/account/v1/im/phone/{phoneNum}', opts),
    opts: opts
  });
}

/** index */
function account_v1_im_user_id_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/account/v1/im/user/{id}', opts),
    opts: opts
  });
}

/** 登录 */
function account_v1_login_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/login',
    opts: opts
  });
}

/** refreshToken */
function account_v1_access_token_refresh_get(opts) {
  return instance({
    method: 'get',
    url:  '/account/v1/access/token/refresh',
    opts: opts
  });
}

/** 刷新accessToken */
function account_v1_access_token_refresh_post(opts) {
  return instance({
    method: 'post',
    url:  '/account/v1/access/token/refresh',
    opts: opts
  });
}

/** 判断是否绑定 */
function account_v1_bind_get(opts) {
  return instance({
    method: 'get',
    url:  '/account/v1/bind',
    opts: opts
  });
}

/** 获取token */
function api_v3_token_post(opts) {
  return instance({
    method: 'post',
    url:  '/api/v3/token',
    opts: opts
  });
}

/** 获取商品列表（APP端用） */
function payment_v1_goods_app_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/payment/v1/goods/app/list',
    opts: opts
  });
}

export {
  api_v3_device_info_post,
  api_v3_device_info_search_post,
  api_v3_device_info_search_exists_post,
  api_v3_device_info_members_total_deviceId_get,
  device_v1_info_sn_sn_get,
  api_v3_device_info_members_deviceId_post,
  account_v1_user_chain_junior_phoneNum_get,
  account_v1_user_chain_move_post,
  account_v1_user_chain_superior_phoneNum_post,
  account_v1_user_code_code_get,
  account_v1_user_id_get,
  account_v1_user_cancellation_check_get,
  account_v1_user_chain_bind_sn_sn_post,
  account_v1_user_chain_bindNotUpdate_post,
  account_v1_user_chain_course_post,
  account_v1_user_chain_init_phoneNum_post,
  account_v1_user_chain_invite_uid_uid_get,
  account_v1_user_cancellation_post,
  account_v1_user_cancellation_cancel_put,
  account_v1_sys_user_id_get,
  account_v1_user_address_post,
  account_v1_user_address_id_put,
  account_v1_user_address_uid_get,
  account_v1_rcs_user_device_deviceId_get,
  account_v1_rcs_user_reset_passwd_post,
  account_v1_sys_user_block_id_put,
  account_v1_sys_user_cancellation_get,
  account_v1_sys_user_cancellation_verify_put,
  account_v1_sys_user_chain_list_get,
  account_v1_sys_user_list_get,
  account_v1_sys_user_unblock_id_put,
  account_v1_rcs_user_agent_register_post,
  account_v1_rcs_user_change_bind_phoneNum_post,
  api_v3_chain_feedback_post,
  account_v1_user_chain_bind_post,
  account_v1_user_token_verify_get,
  account_v1_user_code_code_post,
  api_v3_media_search_page_post,
  api_v3_media_search_page_with_pluses_post,
  api_v3_mediasByRemarks_get,
  api_v3_mediasByRemarks_post,
  payment_v1_goods_zhibean_list_get,
  integral_v1_zhibean_get_uid_get,
  account_v1_user_chain_invite_phoneNum_get,
  api_v3_book_record_list_post,
  api_v3_book_code_code_get,
  api_v3_book_record_report_get,
  api_v3_book_record_favor_get,
  resource_v1_user_member_package_smart_album_get,
  resource_v1_user_album_check_buy_get,
  payment_v1_goods_member_package_recommend_album_list_get,
  qms_v1_answer_result_last_uid_get,
  qms_v1_answer_decide_get,
  qms_v1_answer_post,
  qms_v1_questionnaire_id_get,
  payment_v1_ticket_list_detail_get,
  resource_v1_auth_album_check_get,
  api_v3_albumPage_get,
  account_v1_user_phone_array_post,
  account_v1_register_determine_phone_phoneNum_get,
  account_v1_user_fans_post,
  account_v1_user_fans_list_uid_get,
  account_v1_user_id_array_post,
  account_v1_user_fans_determine_invite_uid_get,
  account_v1_user_check_post,
  api_v3_wechat_js_sign_get,
  api_v3_album_get,
  api_v3_mediaPage_get,
  api_v3_media_get,
  payment_v1_ticket_record_user_take_post,
  payment_v1_ticket_id_get,
  payment_v1_ticket_device_record_edit_post,
  payment_v1_ticket_device_record_get_get,
  payment_v1_ticket_edit_post,
  payment_v1_ticket_list_get,
  payment_v1_ticket_record_edit_post,
  payment_v1_ticket_record_list_get,
  payment_v1_ticket_record_num_get,
  payment_v1_ticket_record_status_used_post,
  payment_v1_product_vip_delete_post,
  payment_v1_product_vip_edit_post,
  payment_v1_product_vip_list_get,
  payment_v1_product_vip_id_get,
  payment_v1_ticket_config_edit_post,
  payment_v1_ticket_config_list_get,
  payment_v1_ticket_config_id_get,
  payment_v1_ticket_delete_post,
  payment_v1_order_id_get,
  payment_v1_pay_wx_auth_url_get_get,
  payment_v1_product_member_package_auth_check_get,
  payment_v1_product_member_package_detail_id_get,
  payment_v1_product_member_package_draw_post,
  payment_v1_product_member_package_draw_status_get,
  payment_v1_product_member_package_edit_post,
  payment_v1_product_member_package_list_get,
  payment_v1_order_member_package_export_excel_get,
  payment_v1_order_member_package_list_get,
  payment_v1_order_member_package_sale_situation_get,
  payment_v1_order_update_id_post,
  payment_v1_order_wechat_h5_order_create_post,
  payment_v1_order_wechat_jsapi_order_create_post,
  payment_v1_order_zhiBean_order_create_post,
  payment_v1_order_createAliOrder_post,
  payment_v1_order_createWxOrder_post,
  payment_v1_order_exportExcel_post,
  payment_v1_order_get_order_detail_get,
  payment_v1_order_getOrderList_uid_get,
  payment_v1_order_list_get,
  payment_v1_order_member_package_detail_get,
  payment_v1_order_member_package_divide_list_get,
  payment_v1_goods_member_list_rights_contents_edit_post,
  payment_v1_goods_member_list_rights_edit_post,
  payment_v1_goods_resource_goods_one_album_list_get,
  payment_v1_goods_rights_course_add_post,
  payment_v1_goods_rights_course_del_post,
  payment_v1_goods_update_id_post,
  payment_v1_goods_id_get,
  payment_v1_order_batchClose_post,
  payment_v1_goods_getGoodsNum_get,
  payment_v1_goods_link_goods_add_post,
  payment_v1_goods_link_goods_delete_post,
  payment_v1_goods_link_goods_list_get,
  payment_v1_goods_list_get,
  payment_v1_goods_member_list_rights_add_post,
  payment_v1_goods_member_list_rights_contents_add_post,
  payment_v1_goods_member_list_rights_contents_del_post,
  payment_v1_goods_add_post,
  payment_v1_goods_album_member_package_get_get,
  payment_v1_goods_app_goodsNum_get,
  payment_v1_goods_bacth_add_post,
  payment_v1_goods_batchSale_post,
  payment_v1_goods_delete_post,
  mms_v1_member_update_post,
  mms_v1_ticket_activate_check_code_uid_post,
  mms_v1_ticket_activate_code_uid_get,
  mms_v1_ticket_activate_exchange_member_package_uid_post,
  mms_v1_ticket_activate_exchange_uid_post,
  mms_v1_ticket_activate_member_package_draw_uid_post,
  mms_v1_member_add_post,
  mms_v1_member_query_uid_post,
  payment_v1_goods_rights_contents_list_get,
  payment_v1_goods_rights_list_get,
  payment_v1_pay_zhiBeanPay_post,
  payment_v1_pay_check_get,
  payment_v1_goods_member_package_link_goods_list_get,
  payment_v1_goods_member_package_list_get,
  payment_v1_goods_member_package_album_list_get,
  account_v1_user_phone_phoneNum_get,
  account_v1_user_reset_passwd_post,
  account_v1_user_uid_uid_get,
  account_v1_user_agent_sync_post,
  account_v1_user_check_get,
  account_v1_user_detail_edit_post,
  account_v1_user_id_array_get,
  account_v1_user_name_get,
  account_v1_user_phone_array_get,
  account_v1_logout_post,
  account_v1_register_post,
  account_v1_register_determine_phone_phoneNum_post,
  account_v1_sms_check_post,
  account_v1_sms_login_post,
  account_v1_sms_send_post,
  account_v1_third_login_post,
  account_v1_bind_post,
  account_v1_guest_login_post,
  account_v1_im_phone_phoneNum_get,
  account_v1_im_user_id_get,
  account_v1_login_post,
  account_v1_access_token_refresh_get,
  account_v1_access_token_refresh_post,
  account_v1_bind_get,
  api_v3_token_post,
  payment_v1_goods_app_list_get
};
