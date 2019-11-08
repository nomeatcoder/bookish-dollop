/*
 * @Author: nomeatcoder
 * @Date:   2019-11-06 19:37:06
 * @Last Modified by:   nomeatcoder
 * @Last Modified time: 2019-11-08 09:25:21
 */
'use strict';
var conf = {
    serverHost: ''
}
var _ajax = {
    //网络请求
    request: function(param) {
        var _this = this;
        $.ajax({
            type: param.method || 'get',
            url: param.url || '',
            dataType: param.type || 'json',
            data: param.data || '',
            success: function(res) {
                //请求成功
                if (0 === res.status) {
                    typeof param.success === 'function' && param.success(res.data, res.msg);
                }
                //没有登录
                else if (10 === res.status) {
                    _this.doLogin();
                }
                //请求数据错误
                else if (1 === res.status) {
                    typeof param.error === 'function' && param.error(res.msg);
                }
            },
            error: function(err) {
                typeof param.error === 'function' && param.error(err.status, err.msg);
            }
        });
    },
    //获取服务器地址
    getServerUrl: function(path){
        return conf.serverHost + path;
    },
    //获取url参数
    getUrlParam: function(name){
        
    },
    //统一登录处理
    doLogin: function() {
        window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href);
    }
};
module.exports = _ajax;