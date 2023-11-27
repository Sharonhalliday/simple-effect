$(document).ready(function () {
    $("p").click(function () {
        $(".walrus-showing").toggle();
        $(".walrus-hidden").toggle();
    });
    $("p").click(function () {
        $(".walrus-showing").fadeIn();
        $(".walrus-hidden").fadeIn();
    });
     $("p").click(function () {
        $(".walrus-showing").fadeOut();
        $(".walrus-hidden").fadeOut();
    });
    
    $("p").click(function () {
        $(".walrus-showing").fadeToggle();
        $(".walrus-hidden").fadeToggle();
    });
    $("p").click(function () {
        $(".walrus-showing").slideDown();
        $(".walrus-hidden").slideDown();
    });
    // $("p").click(function () {
    //     $(".walrus-showing").slideUp();
    //     $(".walrus-hidden").slideUp();
    // });
    // $("p").click(function() {
    //     $(".walrus-showing").slideToggle();
    //     $(".walrus-hidden").slideToggle();
    //   });
    })
            