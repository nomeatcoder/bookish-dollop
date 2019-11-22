/*
 * @Author: nomeatcoder
 * @Date:   2019-11-14 21:53:51
 * @Last Modified by:   nomeatcoder
 * @Last Modified time: 2019-11-14 22:38:37
 */
'use strict';
require('./index.css');
var _ajax = require('utils/utils.js');
var templateIndex = require('./index.string');
// 侧边导航
var navSide = {
    option: {
        name: '',
        navList: [
            { name: 'user-center', desc: '个人中心', href: './user-center.html' },
            { name: 'order-list', desc: '我的订单', href: './order-list.html' },
            { name: 'pass-update', desc: '修改密码', href: './pass-update.html' },
            { name: 'about', desc: '关于福利商城', href: './about.html' }
        ]
    },
    init: function(option) {
        // 合并选项
        $.extend(this.option, option);
        this.renderNav();
    },
    // 渲染导航菜单
    renderNav: function() {
        // 计算active数据
        for (var i = 0, iLength = this.option.navList.length; i < iLength; i++) {
            if (this.option.navList[i].name === this.option.name) {
                this.option.navList[i].isActive = true;
            }
        };
        // 渲染list数据
        var navHtml = _ajax.renderHtml(templateIndex, {
            navList: this.option.navList
        });
        // 把html放入容器
        $('.nav-side').html(navHtml);
    }
};

module.exports = navSide;