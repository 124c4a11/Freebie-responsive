'use strict';

var
  $preloader = $('.preloader'),
  $preloaderImg = $preloader.find('.preloader__img');


function init() {
  $preloaderImg.fadeOut();
  $preloader.delay(400).fadeOut('slow');
}


export default {
  init: init
};