'use strict';

var
  $mainMenu = $('.main-menu'),
  $mainMenuToggle = $mainMenu.find('.main-menu__toggle'),
  $mainMenuNav = $mainMenu.find('.main-menu__nav');


function init() {
  $mainMenuToggle.on('click', function(e) {
    e.preventDefault();

    if ($mainMenu.hasClass('main-menu_open')) {
      close();
    } else {
      open();
    }
  });

  $('.main-menu__item').on('click', function(e) {
    if ($mainMenu.hasClass('main-menu_open')) close();
  });
}

function open() {
  $mainMenuToggle.addClass('hamburger_close');
  $mainMenu.addClass('main-menu_open');
}

function close() {
  $mainMenu.removeClass('main-menu_open');
  $mainMenuToggle.removeClass('hamburger_close');
}

function onResize(windowWidth) {
  if (windowWidth > 992 && $mainMenu.hasClass('main-menu_open')) {
    close();
  }
}

export default {
  init: init,
  open: open,
  close: close,
  onResize: onResize
};