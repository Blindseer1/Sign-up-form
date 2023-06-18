let password=document.querySelector('#pwd').value;
let passwordCheck=document.querySelector('#pwd-check').value;
let span=document.querySelector('span');
let form=document.querySelector('form');
form.addEventListener('submit',verifyValidity())
function verifyValidity()
{
    let match=true;
   span.innerHTML=password==passwordCheck ?'Matching':'not macthing';
   console.log('working')
}
password.addEventListener('keyup',()=>{if(password.length!=0)
    verifyValidity()})
 password.addEventListener('keydown',()=>{if(passwordCheck.length!=0)
        verifyValidity()})

