window.onscroll = function() {myFunction()};
var sticky;
var header;
var hoveringLang;
var Footer;

function ScriptLoad(){
    header = document.getElementById('buttonTray');
    sticky = header.offsetTop;
    hoveringLang=document.getElementById('LangCont-Hovering');
    Footer=document.getElementById('Footer');
    myFunction();
}
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        hoveringLang.style.display='block';
        
    } else {
        header.classList.remove("sticky");
        hoveringLang.style.display='none';
    }
    // console.log(window.pageYOffset);
    let FooterOffset=Math.abs(Math.min(document.body.clientHeight-(window.pageYOffset+window.innerHeight+Footer.clientHeight),0));
    hoveringLang.style.bottom=`${FooterOffset+20}px`;
    console.log();
    // console.log(window.innerHeight);
    
}

function ToAnchor(name)
{
    location.hash=`#${name}`;
    history.pushState("", document.title, window.location.pathname);
}