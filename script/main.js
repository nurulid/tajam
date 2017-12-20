//open burger menu
$("#burger-menu").on("click", function(){
    $("nav ul").toggleClass("open");
})

//active menu
$('.menu a').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    });