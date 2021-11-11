function Enter()
{
    let cont=document.getElementById('FirstContainer');
    cont.style.filter='blur(5px)';  
    cont.style.width='45%';
}

function Leave()
{
    let cont=document.getElementById('FirstContainer');
    cont.style.width='50%';
    cont.style.filter='';  
}