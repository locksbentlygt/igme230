$(".menu").click(function() {
    $(this).next(".items").slideToggle();
});

let article = "article0.txt";
$("article").load(article);

$("form").change(function() {
    article = $('input[name=article]:checked').val();
    $("article").load(article);
});