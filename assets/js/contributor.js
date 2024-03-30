// ------------step-wizard-------------

$('.next-step').on('click', function() {
    // progress bar change
    if($('.wizard-inner').hasClass('onstep1')){
        $('.wizard-inner').removeClass('onstep1');
        $('.wizard-inner').addClass('onstep2');
    }else if ($('.wizard-inner').hasClass('onstep2')) {
        $('.wizard-inner').removeClass('onstep2');
        $('.wizard-inner').addClass('onstep3');
    }
    // progress bar change
    var active = $('.wizard .nav-tabs li.active');
    var newactive = active.next();
    $(active).addClass('complete');
    $(active).removeClass('active');
    $(newactive).removeClass('disabled');
    $(newactive).addClass('active');

    // change tab panel
    var newTab = $(this).attr('data-target');
    $(".tab-content .tab-pane").removeClass("active");
    var findedTab = $(".tab-content").find(newTab);
    $(findedTab).addClass("active");
});
$('.back-step').on('click', function() {
    // progress bar change
    if($('.wizard-inner').hasClass('onstep3')){
        $('.wizard-inner').removeClass('onstep3');
        $('.wizard-inner').addClass('onstep2');
    }else if ($('.wizard-inner').hasClass('onstep2')) {
        $('.wizard-inner').removeClass('onstep2');
        $('.wizard-inner').addClass('onstep1');
    }
    // progress bar change
    var active = $('.wizard .nav-tabs li.active');
    var newactive = active.prev();
    $(active).addClass('disabled');
    $(active).removeClass('active');
    $(newactive).removeClass('complete');
    $(newactive).addClass('active');
    
    // change tab panel
    var newTab = $(this).attr('data-target');
    $(".tab-content .tab-pane").removeClass("active");
    var findedTab = $(".tab-content").find(newTab);
    $(findedTab).addClass("active");
});


// tree-price change

$(".tree-flex .tree-card").click(function(){
    $("#no-tree").prop('checked',false);
    $(".tree-flex .tree-card").removeClass("active");
    var trePrice = $(this).attr("data-price");
    $(this).addClass("active");
    $(".tree-price-section .tree-price").html(trePrice)
})
$("#no-tree").on('change', function(){
    if($("#no-tree").prop('checked') == true){
        $(".tree-flex .tree-card").removeClass("active");
        $(".tree-price-section .tree-price").html("$0")
    };
})
