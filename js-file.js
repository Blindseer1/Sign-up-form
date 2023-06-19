let password=document.querySelector('#pwd');
let passwordCheck=document.querySelector('#pwd-check');
let errorField=document.querySelector('#error-check');
let form=document.querySelector('form');
let firstErrorField=document.querySelector('#firstErrorField')

function verifyValidity()
{
   if(password.value!=passwordCheck.value)
   {
   errorField.textContent="Passwords do not match";
   }
   else
   errorField.textContent=" ";

}


password.addEventListener('input',()=>
{
    if(password.value.length!=0)
    {
        verifyValidity()
       
    }
    if(password.value.length<6)
    {
        firstErrorField.textContent="Please write a passwrod of at least 6 characters"}
        else
        firstErrorField.textContent=" ";

    
    
})
passwordCheck.addEventListener('input',()=>
{
    if(passwordCheck.value.length!=0)
    {
        verifyValidity()
    }
})