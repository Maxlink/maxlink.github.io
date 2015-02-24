$( document ).ready(function() {

    if(Modernizr.mq('(min-width: 768px)')) {
        $('iframe').attr('src', 'https://www.sunfrogshirts.com/search/index.cfm?30130&shelloff&SEARCH=1980');
    } else {
        $('iframe').attr('src', 'https://www.sunfrogshirts.com/mobile/search/index.cfm?30130&shelloff&SEARCH=1980');
    }

    $('form select').change(function() {

        if(Modernizr.mq('(min-width: 768px)')) {
            $('iframe').attr('src', 'https://www.sunfrogshirts.com/search/index.cfm?30130&shelloff&SEARCH=' + $(this).val());
        } else {
            $('iframe').attr('src', 'https://www.sunfrogshirts.com/mobile/search/index.cfm?30130&shelloff&SEARCH=' + $(this).val());
        }

    });

});
