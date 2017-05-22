'use strict';

var
  duration = 1000;


function scrollToTarget(targetHash, isAnimate) {
  var
    direction = targetHash.replace(/#/, ''),
    $target = $('[data-elem="' + direction + '"]'),
    targetPos = $target.offset().top;

  if (isAnimate) {
    $('body, html').animate({
      scrollTop: targetPos
    }, duration);
  } else {
    $('body, html').scrollTop(targetPos);
  }
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
        currentId = $section.data('elem'),
        $requiredLink = $('.main-menu__link').filter('[href="#' + currentId + '"]');

      $requiredLink
        .closest('.main-menu__item')
        .addClass('main-menu__item_active')
          .siblings()
            .removeClass('main-menu__item_active');

      window.location.hash = currentId;
    }
  });
}


export default {
  scrollToTarget: scrollToTarget,
  checkSection: checkSection
}