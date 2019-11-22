/*
* @Author: nomeatcoder
* @Date:   2019-11-08 23:28:08
* @Last Modified by:   nomeatcoder
* @Last Modified time: 2019-11-14 22:02:40
*/
'use strict';
require('./index.css');
var _ajax = require('utils/utils.js');
var _user = require('service/user-service.js');
var _cart = require('service/cart-service.js');
//导航
var nav = {
    init: function(){
        this.bindEvent();
        this.loadUserInfo();
        this.loadCartCount();
        return this;
    },
    bindEvent: function(){
        //登录点击事件
        $('.js-login').click(function(){
            _ajax.doLogin();
        });
        //注册点击事件
        $('.js-register').click(function(){
            window.location.href = './register.html';
        });
        //退出点击事件
        $('.js-register').click(function(){
            _user.loginout(
            function(res){
                window.location.reload();
            },function(errMsg){
                _ajax.errorTips(errMsg);
            });
        });
    },
    // 加载用户信息
    loadUserInfo : function(){
        _user.checkLogin(function(res){
            $('.user.not-login').hide().siblings('.user.login').show()
                .find('.username').text(res.username);
        }, function(errMsg){
            
        });
    },
    // 加载购物车数量
    loadCartCount : function(){
        _cart.getCartCount(function(res){
            $('.nav .cart-count').text(res || 0);
        }, function(errMsg){
            $('.nav .cart-count').text(0);
        });
    }
}
module.exports = nav.init();