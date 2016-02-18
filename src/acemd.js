;(function(factory) {
    "use strict";

	// CommonJS/Node.js
	if (typeof require === "function" && typeof exports === "object" && typeof module === "object")
    {
        module.exports = factory;
    }
	else if (typeof define === "function")  // AMD/CMD/Sea.js
	{
        if (define.amd) // for Require.js
        {
            /* Require.js define replace */
        }
        else
        {
		    define(["jquery"], factory);  // for Sea.js
        }
	}
	else
	{
        window.acemd = factory();
	}

}(function() {
    "use strict";

    var $ = (typeof (jQuery) !== "undefined") ? jQuery : Zepto;

	if (typeof ($) === "undefined") {
		return ;
	}
    
    if (typeof (ace) === "undefined") {
		return ;
	}
    
    /**
     * acemd
     *
     * @param   {String} id           
     * @param   {Object} options    
     * @returns {Object} acemd     返回editormd?象
     */
    var acemd = function (id, options) {
        return new acemd.fn.init(id, options);
    };
    
    acemd.prototype = acemd.fn = {
        /**
         * 构造函数/实例初始化
         * Constructor / instance initialization
         *
         * @param   {String}   id            编辑器的ID
         * @param   {Object}   [options={}]  配置选项 Key/Value
         * @returns {acemd}                  返回editormd的实例对象
         */
        init : function (id, options) {
            var editor = this.editor = $("#" + id);
            var toolbar = this.toolbar = $("<div style=\"height: 40px; border: 1px solid #ddd;\"></div>");
            var aceeditor = this.aceeditor = $("<div style=\"float: left; border: 1px solid #ddd; width: 50%;\">dddddd</div>");
            var mdpreview = this.mdpreview = $("<div style=\"float: left; border: 1px solid #ddd; width: 50%;\">dddddddddd</div>");            
            editor.append(toolbar);
            editor.append(aceeditor);
            editor.append(mdpreview);
            
            editor.addClass("acemd");
            
            return this;
        },
    };
    
    return acemd;
}));