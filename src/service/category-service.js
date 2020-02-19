/*
* @Author: nomeatcoder
* @Date:   2019-11-26 19:39:02
* @Last Modified by:   nomeatcoder
* @Last Modified time: 2020-02-19 23:04:00
*/


'use strict';

var _ajax = require('utils/utils.js');

var _product = {
    // 获取index信息
    getIndex: function(resolve, reject) {
        _ajax.request({
            url: _ajax.getServerUrl('/index/get_index.do'),
            success: resolve,
            error: reject
        });
    }
}
module.exports = _product;