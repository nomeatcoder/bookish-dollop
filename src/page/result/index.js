/*
 * @Author: nomeatcoder
 * @Date:   2019-11-19 20:47:55
 * @Last Modified by:   nomeatcoder
 * @Last Modified time: 2020-04-05 11:14:31
 */
require('./index.css');
var navSide = require('page/common/nav-simple/index.js');
var _ajax = require('utils/utils.js');
$(function() {
    var type = _ajax.getUrlParam('type') || 'default',
        $element = $('.' + type + '-success');
    if (type === 'payment') {
        var orderNumber = _ajax.getUrlParam('orderNumber'),
            $orderNumber = $element.find('.order-number');
        $orderNumber.attr('href', $orderNumber.attr('href') + orderNumber);
    }
    else if (type === 'close') {
        var orderNumber = _ajax.getUrlParam('orderNumber'),
            $orderNumber = $element.find('.order-number');
        $orderNumber.attr('href', $orderNumber.attr('href') + orderNumber);
    }
    // 显示对应的提示元素
    $element.show();
})