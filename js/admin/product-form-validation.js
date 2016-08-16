/**
 * Force user to select a product category before saving the post
 */
jQuery(function ($) {
    'use strict';
    var $title = $('input#title');
    var $metaBox = $('#product_meta_box');

    $('#publish, #save-post').on('click', function (e) {
        if ($.trim($title.val()) === '') {
            showNotice('Please enter the product title');
            e.stopImmediatePropagation();
            $title.val('').focus();
            return false;
        }
        else if ($('#taxonomy-product-category').find('input:checked').length == 0) {
            showNotice('Please select a category first');
            e.stopImmediatePropagation();
            return false;
        } else {

            if ($.trim($('#prod_composition', $metaBox).val()) === '') {
                showNotice('Please enter product composition');
                e.stopImmediatePropagation();
                return false;
            } else if ($.trim($('#prod_packaging', $metaBox).val()) === '') {
                showNotice('Please enter product packaging');
                e.stopImmediatePropagation();
                return false;
            } else {
                return true
            }
        }

    });
    function showNotice(msg) {
        if (msg === '') {
            msg = 'Validation Error !';
        }
        $('div#notice,div#message').remove();
        $('form#post').before('<div id="notice" class="notice notice-error is-dismissible" style="display: none"><p><i class="dashicons dashicons-no"> </i>' + msg + '</p></div>');
        $('div#notice').slideDown().delay(5000).slideUp("slow");
    }
});
