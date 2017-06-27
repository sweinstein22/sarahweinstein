$(document).ready(function() {
  var getProductHeight = $('.product.active').height();

  $('.products').css({
    height: getProductHeight
  });

  function calcProductHeight() {
    getProductHeight = $('.product.active').height();

    $('.products').css({
      height: getProductHeight
    });
  }

  var productItem = $('.product'),
    productCurrentItem = productItem.filter('.active');
  var thumbnailItem = $('.thumbnail'),
    thumbnailCurrentItem = thumbnailItem.filter('.active');

  $('#next').on('click', function(e) {
    e.preventDefault();

    var nextItem = productCurrentItem.next();
    var nextThumb = thumbnailCurrentItem.next();

    productCurrentItem.removeClass('active');
    thumbnailCurrentItem.removeClass('active');

    if (nextItem.length) {
      productCurrentItem = nextItem.addClass('active');
      thumbnailCurrentItem = nextThumb.addClass('active');
    }
    else {
      productCurrentItem = productItem.first().addClass('active');
      thumbnailCurrentItem = thumbnailItem.first().addClass('active');
    }

    calcProductHeight();
  });

  $('#prev').on('click', function(e) {
    e.preventDefault();

    var prevItem = productCurrentItem.prev();
    var prevThumb = thumbnailCurrentItem.prev();

    productCurrentItem.removeClass('active');
    thumbnailCurrentItem.removeClass('active');

    if (prevItem.length) {
      productCurrentItem = prevItem.addClass('active');
      thumbnailCurrentItem = prevThumb.addClass('active');
    }
    else {
      productCurrentItem = productItem.last().addClass('active');
      thumbnailCurrentItem = thumbnailItem.last().addClass('active');
    }

    calcProductHeight();
  });

  // Ripple
  $('[ripple]').on('click', function(e) {
    var rippleDiv = $('<div class="ripple" />'),
      rippleSize = 60,
      rippleOffset = $(this).offset(),
      rippleY = e.pageY - rippleOffset.top,
      rippleX = e.pageX - rippleOffset.left,
      ripple = $('.ripple');

    rippleDiv.css({
      top: rippleY - (rippleSize / 2),
      left: rippleX - (rippleSize / 2),
      background: $(this).attr("ripple-color")
    }).appendTo($(this));

    window.setTimeout(function() {
      rippleDiv.remove();
    }, 1900);
  });
});
