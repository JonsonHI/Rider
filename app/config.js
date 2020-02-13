/*
 * @Author: Jonson 
 * @Date: 2020-02-09 14:00:48 
 * @Last Modified by:   Jonson 
 * 所有网络环境和接口
 * @Last Modified time: 2020-02-09 14:00:48 
 */


export const ENVS = {
  //测试环境和预发布环境
  api_url: 'https://developer.hxx.hoxiuxiu.com', //账号测试环境
  // api_url_map: 'https://corp.search.shanghaiqixiu.org', //搜索测试环境
  // api_url_map: 'http://192.168.169.230:7210', //搜索测试环境
  api_url_map: 'https://corp.search.shanghaiqixiu.org',//搜索成产环境
  api_url_severs: 'https://www.test.shanghaiqixiu.org/proxy',// 接单测试环境
  api_url_insurance: 'https://api.qixiu.hoxiuxiu.com', //保险
  api_url_area: 'https://www.shanghaiqixiu.org/proxy', //商圈






}

//登录验证码
export const LOGIN_PHONE_MSG = '/operate/controller/getOperateCode'
