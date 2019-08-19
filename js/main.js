window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }
};

$(function () {
    var $filterableTables = $('[data-filterable]');
    if ($filterableTables.length) {
        $filterableTables.each(function () {
            var $table = $(this);
            var tableId = $table.data('filterable');
            var $sortableHeaders = $table.find('thead [data-sort]');
            var valueNames = [];
            $sortableHeaders.each(function() {
                valueNames.push($(this).data('sort'));
            });

            var filterOptions = {
                valueNames: valueNames
            };

            var list = new List(tableId, filterOptions);
        });
    }

    // Add tooltips.
    var $tooltips = $('[data-toggle="tooltip"]');
    $tooltips.tooltip();
    $tooltips.click(function (e) {
        e.preventDefault();
    });

    $('[id^="toggle-desc"]').change(function() {
        var $descriptions = $('.toggle-desc');
        if ($(this).is(':checked')) {
            $descriptions.show();
        }
        else {
            $descriptions.hide();
        }
    });
});
