/*
 * @Author: nomeatcoder
 * @Date:   2019-11-14 20:49:42
 * @Last Modified by:   nomeatcoder
 * @Last Modified time: 2020-02-21 19:46:35
 */
'use strict';
var _ajax = require('utils/utils.js');
var _user = {
    // 用户登录
    login : function(userInfo, resolve, reject){
        _ajax.request({
            url     : _ajax.getServerUrl('/user/login.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 检查用户名
    checkUsername : function(username, resolve, reject){
        _ajax.request({
            url     : _ajax.getServerUrl('/user/check_valid.do'),
            data    : {
                type    : 'username',
                str     : username
            },
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 用户注册
    register : function(userInfo, resolve, reject){
        _ajax.request({
            url     : _ajax.getServerUrl('/user/register.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 检查登录状态
    checkLogin : function(resolve, reject){
        _ajax.request({
            url     : _ajax.getServerUrl('/user/get_user_info.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 获取用户密码提示问题
    getQuestion : function(username, resolve, reject){
        _ajax.request({
            url     : _ajax.getServerUrl('/user/forget_get_question.do'),
            data    : {
                username : username
            },
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 检查密码提示问题答案
    checkAnswer : function(userInfo, resolve, reject){
        _ajax.request({
            url     : _ajax.getServerUrl('/user/forget_check_answer.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 重置密码
    resetPassword : function(userInfo, resolve, reject){
        _ajax.request({
            url     : _ajax.getServerUrl('/user/forget_reset_password.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 获取用户信息
    getUserInfo : function(resolve, reject){
        _ajax.request({
            url     : _ajax.getServerUrl('/user/get_information.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 更新个人信息
    updateUserInfo : function(userInfo, resolve, reject){
        _ajax.request({
            url     : _ajax.getServerUrl('/user/update_information.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 登录状态下更新密码
    updatePassword : function(userInfo, resolve, reject){
        _ajax.request({
            url     : _ajax.getServerUrl('/user/reset_password.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 登出
    loginout : function(resolve, reject){
        _ajax.request({
            url     : _ajax.getServerUrl('/user/logout.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 获取积分记录列表
    getIntegralList: function(listParam, resolve, reject) {
        _ajax.request({
            url: _ajax.getServerUrl('/manage/user/integral_list.do'),
            data: listParam,
            success: resolve,
            error: reject
        });
    }
}
module.exports = _user;