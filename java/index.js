window.onload=redirectf()
    


 function redirectf ()
{


    
    if(localStorage.getItem(`usertoken`)!=null)

   
    window.location.href=`welcome.html`
    
}
wrongMsg=document.getElementById(`wrongMsg`)
        wrongMsg.classList.replace(`d-block`,`d-none`);