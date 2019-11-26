/*
 * @Author: nomeatcoder
 * @Date:   2019-11-02 18:02:38
 * @Last Modified by:   nomeatcoder
 * @Last Modified time: 2019-11-26 19:25:04
 */
'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('utils/slider/index.js');
var navSide = require('page/common/nav-side/index.js');
var templateBanner = require('./banner.string');
var _ajax = require('utils/utils.js');

$(function() {
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
});