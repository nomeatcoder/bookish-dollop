/*
 * @Author: nomeatcoder
 * @Date:   2019-12-02 19:39:56
 * @Last Modified by:   nomeatcoder
 * @Last Modified time: 2019-12-02 19:43:06
 */


'use strict';
var _ajax = require('utils/utils.js');

var _payment = {
    // 获取支付信息
    getPaymentInfo: function(orderNumber, resolve, reject) {
        _ajax.request({
            url: _ajax.getServerUrl('/order/pay.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        });
    },
    // 获取订单状态
    getPaymentStatus: function(orderNumber, resolve, reject) {
        _ajax.request({
            url: _ajax.getServerUrl('/order/query_order_pay_status.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        });
    }
}
module.exports = _payment;