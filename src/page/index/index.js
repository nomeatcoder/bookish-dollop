/*
 * @Author: nomeatcoder
 * @Date:   2019-11-02 18:02:38
 * @Last Modified by:   nomeatcoder
 * @Last Modified time: 2020-02-21 15:58:47
 */
'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('utils/slider/index.js');
var navSide = require('page/common/nav-side/index.js');
var _category = require('service/category-service.js');
var templateBanner = require('./banner.string');
var templateFloor = require('./index.string');
var _ajax = require('utils/utils.js');

var page = {
    init: function() {
        this.LoadBanner();
        this.loadList();
    },
    // 加载list数据
    loadList: function() {
        var _this = this,
            listHtml = '',
            $floorListCon = $('.floor-list-con');
        $floorListCon.html('<div class="loading"></div>');
        // 请求接口
        _category.getIndex(function(res) {
            listHtml = _ajax.renderHtml(templateFloor, {
                list        : res.list,
                imageHost   : res.imageHost
            });
            $floorListCon.html(listHtml);
        }, function(errMsg) {
            _ajax.errorTips(errMsg);
        });
    },
    LoadBanner: function() {
        // 渲染banner的html
        var bannerHtml = _ajax.renderHtml(templateBanner);
        $('.banner-con').html(bannerHtml);
        // 初始化banner
        var $slider = $('.banner').unslider({
            dots: true
        });
        // 前一张和后一张操作的事件绑定
        $('.banner-con .banner-arrow').click(function() {
            var forward = $(this).hasClass('prev') ? 'prev' : 'next';
            $slider.data('unslider')[forward]();
        });
    },
}
$(function() {
    page.init();
})