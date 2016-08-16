/**
 * Force user to select a category before saving the post
 */
jQuery(function ($) {
    'use strict';
    var $title = $('input#title');

    $('#publish, #save-post').on('click', function (e) {
        if ($.trim($title.val()) === '') {
            showNotice('Please enter the post title');
            e.stopImmediatePropagation();
            $title.val('').focus();
            return false;
        }
        else if ($('#taxonomy-category').find('input:checked').length == 0) {
            showNotice('Please select a category first');
            e.stopImmediatePropagation();
            return false;
        } else {
            return true;
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
