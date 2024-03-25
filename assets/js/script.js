$(document).ready(function() {
    var navbar = $(".main-nav");
    var jumber = $(".main-nav-jumper");
    var windowHeight = $(window).height(); // Get the height of the viewport
    var navbarHeight = navbar.outerHeight();
    var isSticky = false;

    // Set the initial position of the navbar at the bottom of the viewport
    navbar.css('bottom', 0);

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var viewportBottom = windowHeight; // Calculate the bottom of the viewport

        if (!isSticky && scrollTop >= viewportBottom) {
            navbar.addClass("sticky").css('bottom', 'auto').css('top', 0); // Make navbar sticky at the top
            jumber.css('display', 'block');
            isSticky = true;
        } else if (isSticky && scrollTop < viewportBottom) {
            navbar.removeClass("sticky").css('bottom', 0).css('top', 'auto'); // Return navbar to the bottom
            jumber.css('display', 'none');
            isSticky = false;
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

    const referenceToggles = document.querySelectorAll('.reference-toggle');
  
    referenceToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const reference = toggle.nextElementSibling;
            reference.classList.toggle('active');
        });
    });

//     window.addEventListener("DOMContentLoaded", () => {
//         const header = new Headroom(document.querySelector("#main-nav"));
//         header.init();
// });
})
