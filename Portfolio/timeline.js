window.onload=function()
{
var photo = document.querySelectorAll(".photoContainer");
photo.onClick = function(e)
{
    var yPosition = event.clientY - photo.getBoundingClientRect().top - (photo.clientHeight / 2);
    photo.style.top = yPosition + "px";
}
}