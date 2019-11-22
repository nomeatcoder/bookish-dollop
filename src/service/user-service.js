/*
 * @Author: nomeatcoder
 * @Date:   2019-11-14 20:49:42
 * @Last Modified by:   nomeatcoder
 * @Last Modified time: 2019-11-14 22:00:39
 */
'use strict';
var _ajax = require('utils/utils.js');
var _user = {
    // 检查登录状态
    checkLogin: function(resolve, reject) {
        _ajax.request({
            url: _ajax.getServerUrl('/user/get_user_info.do'),
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    //登出
    loginout: function(resolve, reject) {
        _ajax.request({
            url: _ajax.getServerUrl('/user/loginout.do'),
            method: 'POST',
            success: resolve,
            error: reject
        });
    }
}
module.exports = _user;