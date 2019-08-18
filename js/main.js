window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }
};

$(function () {
    if ($('#beers').length) {
        var beerOptions = {
            valueNames: ['brewery', 'name', 'abv', 'bar', 'region']
        };
        var beerList = new List('beers', beerOptions);
    }

    if ($('#ciders').length) {
        var ciderOptions = {
            valueNames: ['type', 'mill', 'name', 'abv', 'region']
        };
        var ciderList = new List('ciders', ciderOptions);
    }

    // Add tooltips.
    var $tooltips = $('[data-toggle="tooltip"]');
    $tooltips.tooltip();
    $tooltips.click(function (e) {
        e.preventDefault();
    });

    $('#toggle-desc').change(function() {
        var $descriptions = $('.toggle-desc');
        if ($(this).is(':checked')) {
            $descriptions.show();
        }
        else {
            $descriptions.hide();
        }
    });
});
