/*
 * @Author: nomeatcoder
 * @Date:   2019-11-14 21:15:36
 * @Last Modified by:   nomeatcoder
 * @Last Modified time: 2019-11-14 21:24:00
 */
'use strict';
var _ajax = require('utils/utils.js');
var _cart = {

    // 获取购物车数量
    getCartCount: function(resolve, reject) {
        _ajax.request({
            url: _ajax.getServerUrl('/cart/get_cart_product_count.do'),
            success: resolve,
            error: reject
        });
    }
}
module.exports = _cart;