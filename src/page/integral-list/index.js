/*
 * @Author: nomeatcoder
 * @Date:   2019-12-02 20:25:00
 * @Last Modified by:   nomeatcoder
 * @Last Modified time: 2020-02-21 20:32:36
 */


'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _ajax = require('utils/utils.js');
var _user = require('service/user-service.js');
var Pagination = require('utils/pagination/index.js');
var templateIndex = require('./index.string');

// page 逻辑部分
var page = {
    data: {
        listParam: {
            pageNum: 1,
            pageSize: 10
        }
    },
    init: function() {
        this.onLoad();
    },
    onLoad: function() {
        this.loadIntegralList();
        // 初始化左侧菜单
        navSide.init({
            name: 'integral-list'
        });
    },
    // 加载积分记录列表
    loadIntegralList: function() {
        var _this = this,
            integralListHtml = '',
            $listCon = $('.integral-list-con');
        $listCon.html('<div class="loading"></div>');
        _user.getIntegralList(this.data.listParam, function(res) {
            // 渲染html
            integralListHtml = _ajax.renderHtml(templateIndex, res);
            $listCon.html(integralListHtml);
            _this.loadPagination({
                hasPreviousPage: res.hasPreviousPage,
                prePage: res.prePage,
                hasNextPage: res.hasNextPage,
                nextPage: res.nextPage,
                pageNum: res.pageNum,
                pages: res.pages
            });
        }, function(errMsg) {
            $listCon.html('<p class="err-tip">加载积分记录失败，请刷新后重试</p>');
        });
    },
    // 加载分页信息
    loadPagination: function(pageInfo) {
        var _this = this;
        this.pagination ? '' : (this.pagination = new Pagination());
        this.pagination.render($.extend({}, pageInfo, {
            container: $('.pagination'),
            onSelectPage: function(pageNum) {
                _this.data.listParam.pageNum = pageNum;
                _this.loadIntegralList();
            }
        }));
    }
};
$(function() {
    page.init();
});