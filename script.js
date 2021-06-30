element = document.getElementById('myEmoji');
function ChangeEmoji() {
if (element.src.match("glassoff"))
{
 element.src="images/smile.png";
}
else if (element.src.match("smile"))
{
    element.src="images/love.jpg";
}
else if (element.src.match("love"))
{
    element.src="images/bye.jpg";
}
else if (element.src.match("bye"))
{
    element.src="images/yep.png";
}
else {
    element.src="images/glassoff.jpg";
}

};

