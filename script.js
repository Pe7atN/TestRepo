window.onscroll = function() {myFunction()};
var sticky;
var header;

function ScriptLoad(){
    header = document.getElementById('buttonTray');
    sticky = header.offsetTop;
    myFunction();
}

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function ToAnchor(name)
{
    location.hash=`#${name}`;
    history.pushState("", document.title, window.location.pathname);
}