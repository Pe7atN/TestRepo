function Blue(name)
{
    let h=document.getElementById(name+'Period');
    let c=document.getElementById(name+'Container');
    c.style.zIndex="2";
    h.style.color='#3B9AF3';

    let cont;
    if(name=='First')cont=document.getElementById('SecondContainer');
    else cont=document.getElementById('FirstContainer');
    cont.style.filter='blur(4px)';
}

function White(name)
{
    let h=document.getElementById(name+'Period');
    let c=document.getElementById(name+'Container');
    h.style.color='white';
   setTimeout(()=>{c.style.zIndex="1";console.log(2)},300)

   let cont;
   if(name=='First')cont=document.getElementById('SecondContainer');
   else cont=document.getElementById('FirstContainer');
   cont.style.filter='blur(0px)'
}

