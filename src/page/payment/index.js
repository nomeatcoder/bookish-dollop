/*
 * @Author: nomeatcoder
 * @Date:   2019-12-03 22:43:57
 * @Last Modified by:   nomeatcoder
 * @Last Modified time: 2020-03-07 23:36:51
 */

'use strict';

require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var _ajax = require('utils/utils.js');
var _payment = require('service/payment-service.js');
var templateIndex = require('./index.string');

// page 逻辑部分
var page = {
    data: {
        orderNumber: _ajax.getUrlParam('orderNumber')
    },
    init: function() {
        this.onLoad();
    },
    onLoad: function() {
        // 加载detail数据
        this.loadPaymentInfo();
    },
    // 加载订单列表
    loadPaymentInfo: function() {
        var _this = this,
            paymentHtml = '',
            $pageWrap = $('.page-wrap');
        $pageWrap.html('<div class="loading"></div>');
        _payment.getPaymentInfo(this.data.orderNumber, function(res) {
            // 渲染html
            paymentHtml = _ajax.renderHtml(templateIndex, res);
            $pageWrap.html(paymentHtml);
            _this.listenOrderStatus();
        }, function(errMsg) {
            $pageWrap.html('<p class="err-tip">' + errMsg + '</p>');
        });
    },
    // 监听订单状态
    listenOrderStatus: function() {
        var _this = this;
        this.paymentTimer = window.setInterval(function() {
            _payment.getPaymentStatus(_this.data.orderNumber, function(res) {
                if (res == true) {
                    window.location.href = './result.html?type=payment&orderNumber=' + _this.data.orderNumber;
                }else if (res == false){
                    window.location.href = './result.html?type=close&orderNumber=' + _this.data.orderNumber;
                }
            });
        }, 5e3);
    }
};
$(function() {
    page.init();
});