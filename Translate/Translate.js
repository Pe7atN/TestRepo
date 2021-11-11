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
    LangLabel.innerHTML=L;
    GetCurrentPageLang();
    if(L=='BG')ToBG();
    else ToEN()
}

function Toggle()
{
    let LangLabel=document.getElementById('lang');
    if(sessionStorage.getItem('lang')=='EN')
    {
        sessionStorage.removeItem('lang');
        sessionStorage.setItem('lang','BG');
        LangLabel.innerHTML='BG';
        ToBG();
    }
    else
    {
        sessionStorage.removeItem('lang');
        sessionStorage.setItem('lang','EN');
        LangLabel.innerHTML='EN';
        ToEN();
    }
}



//usage: