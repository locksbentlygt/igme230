/* Don't use <script> tags in a linked js file! */
let content = "content1.txt";
$("#content").load(content);

$("#choose-content").change(function() {
    content = $(this).val();
    $("#content").load(content);
});

$(".menuitem").click(function() {
    $(this).next(".submenu").slideToggle();
});


