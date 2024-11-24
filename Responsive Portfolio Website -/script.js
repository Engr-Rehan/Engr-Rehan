$(document).ready(function() {
    // Cache jQuery selectors to avoid querying the DOM multiple times
    const $navbar = $('.navbar');
    const $scrollUpBtn = $('.scroll-up-btn');
    const $scr = $('.scr');
    const $unt = $('.unt');
    const $html = $('html');
    const $menu = $('.navbar .menu');
    const $menuBtnIcon = $('.menu-btn i');
    const $body = $('body');
    const $crsr = $('.crsr');
    
    $(window).scroll(function() {
        const scrollY = this.scrollY;

        // sticky navbar and scroll-up button show/hide
        $navbar.toggleClass("sticky", scrollY > 20);
        $scrollUpBtn.toggleClass("show", scrollY > 500);

        // Image scaling on scroll
        if (scrollY > 200) {
            const scale = Math.max(0.5, 1 - scrollY / 3000);
            $scr.css('transform', `scale(${scale})`);

            // Generating a random color
            $unt.css('color', getRandomColor());
        }
    });

    // Function to generate a random color
    function getRandomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }

    // slide-up script
    $scrollUpBtn.click(function() {
        $html.animate({ scrollTop: 0 }).css("scrollBehavior", "auto");
    });

    // Applying smooth scroll on menu items click
    $('.navbar .menu li a').click(function() {
        $html.css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $menu.toggleClass("active");
        $menuBtnIcon.toggleClass("active");
    });

    // Typing text animation scripts
    new Typed(".typing", {
        strings: ["Study Abroad?", "Work Abroad?", "Visit Abroad"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    new Typed(".typing-2", {
        strings: ["EminentConsultancy"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Custom cursor
    $body.on('mousemove', function(e) {
        $crsr.css({
            left: `${e.pageX}px`,
            top: `${e.pageY}px`
        });
    });
});

// Email.JS

