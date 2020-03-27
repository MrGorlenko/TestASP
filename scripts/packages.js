$(document).ready(function(){
    var packageItem = $('.packages__item'),
    packageItemActive = $('.packages__item_active');

    packageItem.on('mouseover', function(){
        packageItem.addClass('packages__item_active');
    })

    packageItem.on('mouseout', function(){
        packageItem.removeClass('packages__item_active');
    })

})