$(document).ready(function() {
    var navbar = $(".main-nav");
    var abstract = $("#abstract"); // Change this to target your specific abstract element
    var navbarHeight = navbar.outerHeight();

    // Set the initial position of the navbar right below the abstract
    navbar.css('top', abstract.offset().top + abstract.outerHeight());

    $(window).scroll(function() {
        var stickyThreshold = abstract.offset().top + abstract.outerHeight();
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= stickyThreshold) {
            navbar.addClass("sticky").css('top', 0); // Adjust 'top' property to align the navbar to the top
        } else {
            navbar.removeClass("sticky").css('top', abstract.offset().top + abstract.outerHeight());
        }
    });
    

    function toggleImage(event) {
        var btn = event.currentTarget;
        var imageId = btn.dataset.imageId;
        var image = $("#" + imageId);
        image.toggleClass('visible');
    }

    function hideImage(event) {
        var image = $(event.currentTarget);
        image.removeClass('visible');
    }

    $('.image-toggle').on('click', toggleImage);
    $('.image-container-right').on('click', hideImage);
});