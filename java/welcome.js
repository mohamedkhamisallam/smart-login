

 sessionUserName=localStorage.getItem(`usertoken`);
window.onload=redirectf(),displayWelcomeUser()
    


 function redirectf ()
{


    
    if(localStorage.getItem(`usertoken`)==null)

   
    window.location.href=`index.html`;
    
}

function displayWelcomeUser ()
  {

document.getElementById(`username`).innerHTML="welcome "+ sessionUserName


  }