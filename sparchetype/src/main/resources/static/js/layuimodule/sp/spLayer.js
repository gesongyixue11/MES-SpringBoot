/**
 * 组件：扩展layui弹出框
 */
layui.define(['layer'], function (exports) {
    var $ = layui.jquery,
        layer = layui.layer;

    var spLayer = {
        // 渲染弹出框
        open: function (param) {
            // 默认配置
            var defaultConfig = {
                type: 2,
                fixed: false,
                maxmin: true,
                btn: ['确定', '取消'],
                yes: function (index, layero) {
                    //点击确认触发 iframe 内容中的按钮提交
                    var submit = layero.find('iframe').contents().find("#js-submit");
                    submit.click();

                    // 如果是搜索弹窗面板，之下如下逻辑，以便调用页面可以通过回调函数获取数据
                    if (param.spCallback && (param.spCallback instanceof Function)) {
                        var callbackData = layero.find('iframe')[0].contentWindow.callbackData();
                        param.spCallback(callbackData);
                    }
                },
                btn2: function (index, layero) {
                    //按钮【按钮二】的回调

                    //return false 开启该代码可禁止点击该按钮关闭
                },
                cancel: function (index, layero) {
                    //右上角关闭回调

                    //return false 开启该代码可禁止点击该按钮关闭
                },
                success: function(layero, index){
                },
                full: function(layero){
                }
            };

            var config = $.extend({}, defaultConfig, param, {
                content: param.content + '?' + spUtil.parseParam(param.spWhere)
            });

            return layer.open(config);
        },
        checkStatus: {}
    };

    exports('spLayer', spLayer);
});