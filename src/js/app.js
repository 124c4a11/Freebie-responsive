'use strict';

import mainMenu from './modules/mainMenu';

$(document).ready(function() {
  if ($('.main-menu').length) {
    mainMenu.init();
  }
});

$(window).on('resize', function() {
  var
    windowWidth = $(window).width(),
    windowHeight = $(window).height();

  if ($('.main-menu').length) {
    mainMenu.onResize(windowWidth);
  }
});