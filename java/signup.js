window.onload=redirectf()
    


 function redirectf ()
{


    
    if(localStorage.getItem(`usertoken`)!=null)

   
    window.location.href=`welcome.html`;
    
}

