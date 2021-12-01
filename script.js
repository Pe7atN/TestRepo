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
        console.log('sticky');
        header.classList.add("sticky");
    } else {
        if(header.classList.contains('sticky'))
        header.classList.remove("sticky");
    }
}

function ToAnchor(name)
{
    location.hash=`#${name}`;
    history.pushState("", document.title, window.location.pathname);
}