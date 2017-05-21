'use strict';

var
  $pageHeader = $('.page-header'),
  pageHeaderHeight = $pageHeader.height();

// scrolling variables
var
  scrollDelta = 10,
  previousTop = 0,
  currentTop = 0;


function onScroll(scrollTop) {
  currentTop = scrollTop;
  autoHideHeader(currentTop);
  previousTop = currentTop;
}


function autoHideHeader(currentTop) {
  if (previousTop - currentTop > 0) { // if scrolling up...
    if (currentTop > 0 && $pageHeader.hasClass('page-header_fixed')) {
      $pageHeader.addClass('page-header_fixed-visible');
    } else {
      $pageHeader.removeClass('page-header_fixed page-header_fixed-visible');
    }
  } else if (previousTop - currentTop < 0) { // if scrolling down... (fixed ie)
    if ($pageHeader.hasClass('page-header_fixed-visible')) {
      $pageHeader.removeClass('page-header_fixed-visible');
    }

    if (currentTop > pageHeaderHeight && !$pageHeader.hasClass('page-header_fixed')) {
      $pageHeader.addClass('page-header_fixed');
    }
  }
}


export default {
  onScroll: onScroll
}