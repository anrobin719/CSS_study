$(function() {

    var hero = $("#charBox");

    $(document).keydown(function(e) {
        switch(e.which) {
        //move left
        case 37:
            hero.animate({left: "-=50px"}, 'fast');
            break;
        
        //move right
        case 39:
            hero.animate({left: "+=50px"}, 'fast');
            break;
        
        //jump
        case 38:
            hero.css({'animation': 'jump .7s steps(5) infinite'});
            break;
        };
    }).on("keydown", function(){
        $("#move").css({'animation': 'run .7s steps(6) infinite'});
    }).on("keyup", function(){
        $("#move").css({'animation': 'stay 1s steps(5) infinite'});
    });


});