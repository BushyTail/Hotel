!function(n){var e={};function t(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(i,r,function(e){return n[e]}.bind(null,r));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n/*import summ from './modules/summ.js'\n\nsumm(2, 5)*/\nfunction ibg() {\n  var ibg = document.querySelectorAll(\".ibg\");\n\n  for (var i = 0; i < ibg.length; i++) {\n    if (ibg[i].querySelector('img')) {\n      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';\n    }\n  }\n}\n\nibg();\n/*\nfunction ibg(){\n  $.each($('.ibg'), function(index, val) {\n    if($(this).find('img').length>0){\n      $(this).css('background-image','url(\"'+$(this).find('img').attr('src')+'\")');\n    }\n  });\n}\nibg();\n*/\n\n$(document).ready(function () {\n  $('.header__burger').click(function (event) {\n    $('.header__burger,.header_nav').toggleClass('active');\n    $('body').toggleClass('lock');\n  });\n});\nvar animItems = document.querySelectorAll('._anim-items');\n\nif (animItems.length > 0) {\n  window.addEventListener('scroll', animOnScroll);\n\n  function animOnScroll() {\n    for (var index = 0; index < animItems.length; index++) {\n      var animItem = animItems[index];\n      var animItemHeight = animItem.offsetHeight;\n      var animItemOffset = offset(animItem).top;\n      var animStart = 4;\n      var animItemPoint = window.innerHeight - animItemHeight / animStart;\n\n      if (animItemHeight > window.innerHeight) {\n        animItemPoint = window.innerHeight - window.innerHeight / animStart;\n      }\n\n      if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {\n        animItem.classList.add('_active');\n      } else {\n        if (!animItem.classList.contains('_anim-no-hide')) {\n          animItem.classList.remove('_active');\n        }\n      }\n    }\n  }\n\n  function offset(el) {\n    var rect = el.getBoundingClientRect(),\n        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,\n        scrollTop = window.pageYOffset || document.documentElement.scrollTop;\n    return {\n      top: rect.top + scrollTop,\n      left: rect.left + scrollLeft\n    };\n  }\n\n  setTimeout(function () {\n    animOnScroll();\n  }, 700);\n}\n\n//# sourceURL=webpack:///./src/js/main.js?")}]);