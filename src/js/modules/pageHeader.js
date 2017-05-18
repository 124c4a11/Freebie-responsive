'use strict';

var
  $pageHeader = $('.page-header');

var
  pageHeaderHeight = $pageHeader.height(),
  previousTop = 0;

function onScroll(currentTop) {
  if (currentTop < previousTop) {

    // if scrolling up...
    if (currentTop > 0 && $pageHeader.hasClass('page-header_fixed')) {
      $pageHeader.addClass('page-header_fixed-visible');
    } else {
      $pageHeader.removeClass('page-header_fixed page-header_fixed-visible');
    }
  } else {

    // if scrolling down
    if ($pageHeader.hasClass('page-header_fixed-visible')) {
      $pageHeader.removeClass('page-header_fixed-visible');
    }

    if (currentTop > pageHeaderHeight && !$pageHeader.hasClass('page-header_fixed')) {
      $pageHeader.addClass('page-header_fixed');
    }
  }

  previousTop = currentTop;
}

export default {
  onScroll: onScroll
}