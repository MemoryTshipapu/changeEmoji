element = document.getElementById('myEmoji');
function ChangeEmoji() {
if (element.src.match("glassoff"))
{
 element.src="smile.png";
}
else if (element.src.match("smile"))
{
    element.src="love.jpg";
}
else if (element.src.match("love"))
{
    element.src="bye.jpg";
}
else if (element.src.match("bye"))
{
    element.src="yep.png";
}
else {
    element.src="glassoff.jpg";
}

};

