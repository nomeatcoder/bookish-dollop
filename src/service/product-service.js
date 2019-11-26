/*
* @Author: nomeatcoder
* @Date:   2019-11-26 19:39:02
* @Last Modified by:   nomeatcoder
* @Last Modified time: 2019-11-26 19:41:38
*/


'use strict';

var _ajax = require('utils/utils.js');

var _product = {
    // 获取商品列表
    getProductList: function(listParam, resolve, reject) {
        _ajax.request({
            url: _ajax.getServerUrl('/product/list.do'),
            data: listParam,
            success: resolve,
            error: reject
        });
    },
    // 获取商品详细信息
    getProductDetail: function(productId, resolve, reject) {
        _ajax.request({
            url: _ajax.getServerUrl('/product/detail.do'),
            data: {
                productId: productId
            },
            success: resolve,
            error: reject
        });
    }
}
module.exports = _product;