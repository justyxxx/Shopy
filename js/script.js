$('.product').hover(
  function() {
    $(this).addClass('hover')
  },
  function() {
    $(this).removeClass('hover')
  }
);

$('.product-more__link').click(
  function () {
    $('.product').removeClass('hidden')
  }
);

$(function () {
  $('.main-nav').slicknav({
    label: "Menu"
  });
});
