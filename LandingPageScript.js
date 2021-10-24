// let TimeOut;
// window.onload=function()
// {

// }

function Enter(name)
{
    let c=document.getElementById(name+'Container')
    let h=document.getElementById(name+'Period');
    c.style.width='57%';
    h.style.color='#318DE2';

    let cont;
    if(name=='First')cont=document.getElementById('SecondContainer');
    else cont=document.getElementById('FirstContainer');
    cont.style.filter='blur(5px)';  
    cont.style.width='43%';
}

function Leave(name)
{
    let c=document.getElementById(name+'Container')
    let h=document.getElementById(name+'Period');
    h.style.color='white';
    c.style.width='50%';

    if(name=='First')cont=document.getElementById('SecondContainer');
    else cont=document.getElementById('FirstContainer');
    cont.style.width='50%';
    cont.style.filter='';  
}