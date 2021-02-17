$("button").each(function () {
    $(this).on("click", function () {
       $(this).parent().toggleClass("active");
    })
    ;
})

