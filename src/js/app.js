'use strict';

import mainMenu from './modules/mainMenu';
import gallery from './modules/gallery';
import pageNavigation from './modules/pageNavigation';
import pageHeader from './modules/pageHeader';
import preloader from './modules/preloader';

$(document).ready(function() {
  if ($('.main-menu').length) {
    mainMenu.init();
  }

  if ($('.recent-works').length) {
    gallery.init($('.recent-works'));
  }

  if ($('.page-section').length) {
    pageNavigation.checkSection();
    pageNavigation.scrollToTarget(window.location.hash);
  }
});


$(window).on('load', function() {
  if ($('.preloader').length) {
    preloader.init();
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


$(window).on('scroll', function() {
  var
    windowScrollTop = $(document).scrollTop();

  if ($('.page-section').length) {
    pageNavigation.checkSection();
  }

  if ($('.page-header').length) {
    pageHeader.onScroll(windowScrollTop);
  }
});