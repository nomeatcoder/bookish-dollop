/*
* @Author: nomeatcoder
* @Date:   2019-11-02 18:02:38
* @Last Modified by:   nomeatcoder
* @Last Modified time: 2019-11-07 22:27:39
*/
'use strict';
var _ajax = require('utils/utils.js');

var html = '<div>{{data}}</div>';
var data = {
    data: 333
}
console.log(_ajax.renderHtml(html,data));