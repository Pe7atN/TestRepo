let Bulgarian,English;

function ToBG()
{
    for(const text in Bulgarian)
    {
        let el;
        console.log(text);
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
    console.log(page)
    if(page=='LandingPage')
    {
        Bulgarian={...BG[page]};
        English={...EN[page]};
    }
    else if(page=='FirstHalf'||page=='SecondHalf')
    {
        Bulgarian={...BG[page]};
        English={...EN[page]};
        delete Bulgarian.Pages
        delete English.Pages
    }
    else//______________________________________________________________________________________
    {
        let pageNum;
        [page,pageNum]=page.split('-')
        Bulgarian={...BG[page]};
        English={...EN[page]};
        unset(Bulgarian,'Pages')
        unset(English,'Pages')
    }
    console.log(Bulgarian);
    console.log(English);
    
}

function OnLoad()
{
    let L=sessionStorage.getItem('lang');
    if(L==null)
    {
        sessionStorage.removeItem('lang');
        sessionStorage.setItem('lang','EN');
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
