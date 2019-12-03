/*
* @Author: nomeatcoder
* @Date:   2019-12-03 21:54:26
* @Last Modified by:   nomeatcoder
* @Last Modified time: 2019-12-03 22:15:34
*/

'use strict';

require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _ajax = require('utils/utils.js');
var _user = require('service/user-service.js');

// page 逻辑部分
var page = {
    init: function() {
        this.onLoad();
    },
    onLoad: function() {
        // 初始化左侧菜单
        navSide.init({
            name: 'about'
        });
    },
    // 加载用户信息
    loadUserInfo: function() {
        var userHtml = '';
        _user.getUserInfo(function(res) {
            userHtml = _ajax.renderHtml(templateIndex, res);
            $('.panel-body').html(userHtml);
        }, function(errMsg) {
            _ajax.errorTips(errMsg);
        });
    }
};
$(function() {
    page.init();
});