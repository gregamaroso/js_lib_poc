(function($) {

$(function() {
  $('button', '.j-add-to-bag').click(function(e) {
    var $button = $(this);
    var sku = $button.data('sku');
    var qty = $button.data('qty');
    console.log('jquery', sku, qty);
  });
});

})(jQuery);