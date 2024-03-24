$("#mb-sidebar-show").click(function() {
    $(".header").toggleClass("active");
    $("body").toggleClass("sidebar-show");
})


$(".tab-links a").click(function(){
    $(".tab-content-div .tab-item").removeClass("active");
    $(".tab-links a").removeClass("active");
    var show_class = $(this).attr("data-target-class");
    console.log(show_class);
    $(show_class).addClass("active");
    $(this).addClass("active");
})

