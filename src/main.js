// Adds a button for user to scroll to top immediately

const $ = require('jquery');

import elrUI from 'elr-ui';
let ui = elrUI();

const elrBackToTop = function() {
    const $backToTop = ui.createElement('button', {
        'class': 'back-to-top fa fa-caret-up'
    }).appendTo('body').hide();

    ui.scrollToView($backToTop);

    $backToTop.on('click', function() {
        ui.toTop($('body, html'), 900);
    });
};

export default elrBackToTop;