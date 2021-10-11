function ToBG()
{
    for(const text in BG)
    {
        let el;
        if(text!='pages')el=document.getElementById(text).innerHTML=BG[text];
    }
}

function ToEN()
{
    for(const text in EN)
    {
        let el;
        if(text!='pages')el=document.getElementById(text).innerHTML=EN[text];
    }
}

function OnLoad()
{
    sessionStorage.removeItem('lang');
    sessionStorage.setItem('lang','EN');
    let el=document.getElementById('title').innerHTML;
    let LangLabel=document.getElementById('lang');
    LangLabel.innerHTML='EN';
    ToEN();
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
