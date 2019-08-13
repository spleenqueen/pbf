$(function () {
    if ($('#beers').length) {
        var beerOptions = {
            valueNames: [
                'brewery',
                'name',
                'abv',
                'bar',
                'region',
            ]
        };

        var beerList = new List('beers', beerOptions);
    }

    if ($('#ciders').length) {
        var ciderOptions = {
            valueNames: [
                'type',
                'mill',
                'name',
                'abv',
                'region',
            ]
        };

        var ciderList = new List('ciders', ciderOptions);
    }

    // Add tooltips.
    $('[data-toggle="tooltip"]').tooltip();

    $('#toggle-desc').change(function() {
        if ($(this).is(':checked')) {
            $('.toggle-desc').show();
        }
        else {
            $('.toggle-desc').hide();
        }

    });
})
