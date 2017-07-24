'use strict';

import magnificPopup from '../vendor/jquery.magnific-popup.js';

var
  $gallery = {},
  $galleryItems = {};


function init($container) {
  $gallery = $container;
  $galleryItems = $gallery.find('.gallery__item');

  if ($galleryItems) {
    $('.gallery__item').magnificPopup({
      delegate: '.gallery__item-link',
      type: 'image',
      gallery: {
        enabled: true
      },
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });
  }
}


export default {
  init: init
};