'use strict';

import mainMenu from './modules/mainMenu';
import gallery from './modules/gallery';

$(document).ready(function() {
  if ($('.main-menu').length) {
    mainMenu.init();
  }

  if ($('.recent-works').length) {
    gallery.init($('.recent-works'));
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