'use strict';

var
  duration = 1000;


function scrollToTarget(id) {
  var
    direction = id.replace(/#/, ''),
    $target = $('[data-target="' + direction + '"]'),
    targetPos = $target.offset().top;

  $('body, html').animate({
    scrollTop: targetPos
  }, duration);
}


function checkSection() {
  $('.page-section').each(function() {
    var
      $section = $(this),
      topEdge = $section.offset().top - 400,
      bottomEdge = topEdge + $section.height(),
      windowScrollTop = $(window).scrollTop();

    if(topEdge < windowScrollTop && bottomEdge > windowScrollTop) {
      var
        currentId = $section.data('target'),
        reqLink = $('.main-menu__link').filter('[href="#' + currentId + '"]');

      reqLink
        .closest('.main-menu__item')
        .addClass('main-menu__item_active')
          .siblings()
            .removeClass('main-menu__item_active');
    }
  });
}


export default {
  scrollToTarget: scrollToTarget,
  checkSection: checkSection
}