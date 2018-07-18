$(function() {
    $('.scroll').click(function() {
        $('html,body').animate({ scrollTop: $('#home').offset().top }, '1000');
        return false;
    });

    var $myContainer = $('#myDIV')

    $myContainer.hide();

    $('.showslow').click(function() {
        $myContainer.toggle('slow');
    });
});