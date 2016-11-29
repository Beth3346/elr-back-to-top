'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// Adds a button for user to scroll to top immediately

var $ = require('jquery');
var elr = require('elr-utility-lib');

var elrBackToTop = function elrBackToTop() {
    // const self = {};
    var $backToTop = elr.createElement('button', {
        'class': 'back-to-top fa fa-caret-up'
    }).appendTo('body').hide();

    elr.scrollToView($backToTop);

    $backToTop.on('click', function () {
        elr.toTop($('body, html'), 900);
    });

    // return self;
};

exports.default = elrBackToTop;