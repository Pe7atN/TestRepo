let Bulgarian,English;

function ToBG()
{
    for(const text in Bulgarian)
    {
        let el;
        if(text!='pages')el=document.getElementById(text).innerHTML=Bulgarian[text];
    }
}

function ToEN()
{
    for(const text in English)
    {
        let el;
        if(text!='pages')el=document.getElementById(text).innerHTML=English[text];
    }
}

function GetCurrentPageLang()
{
    let page=sessionStorage.getItem('page');
    if(!BG[page]||!EN[page])console.log('Language for this page was not found')
    Bulgarian=BG[page];
    English=EN[page];
}

function OnLoad()
{
    let L=sessionStorage.getItem('lang');
    if(L==null)
    {
        sessionStorage.removeItem('lang');
        sessionStorage.setItem('lang','EN');
        L='EN';
    }
    let LangLabel=document.getElementById('lang');
    let LangLabel1=document.getElementById('lang-Hovering');
    LangLabel.innerHTML=L;
    LangLabel1.innerHTML=L;
    GetCurrentPageLang();
    if(L=='BG')ToBG();
    else ToEN()
}

function Toggle()
{
    let LangLabel=document.getElementById('lang');
    let LangLabel1=document.getElementById('lang-Hovering');
    if(sessionStorage.getItem('lang')=='EN')
    {
        sessionStorage.removeItem('lang');
        sessionStorage.setItem('lang','BG');
        LangLabel.innerHTML='BG';
        LangLabel1.innerHTML='BG';
        ToBG();
    }
    else
    {
        sessionStorage.removeItem('lang');
        sessionStorage.setItem('lang','EN');
        LangLabel.innerHTML='EN';
        LangLabel1.innerHTML='EN';
        ToEN();
    }
}



//usage:
