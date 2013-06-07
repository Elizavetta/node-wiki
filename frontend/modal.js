"use strict";

//@todos
// - use templateing system
//   all dialogs should use this module

var modalTemplate = require("./templates/modal.hbs");
var __ = require("./translate");
var defaults = {
    confirm: __("button-confirm"),
    cancle: __("button-cancle")
};

module.exports = function (opts) {
    var options = $.extend({}, defaults, opts);

    return $(modalTemplate(options))
        .appendTo("body")
        .modal("show");
};
