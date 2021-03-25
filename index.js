function fade() {
    $(".preloader").fadeOut("slow");

}
setTimeout(fade, 900);

$("#toggle").on("click", function() {
    $("#dropDown").slideToggle();
});