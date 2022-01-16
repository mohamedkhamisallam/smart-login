

//////////////////////////////////////all global variables////////////////

let usernameInput=document.getElementById(`usernameInput`);
let userEmailInput=document.getElementById(`userEmailInput`);
let userPasswordInput=document.getElementById(`userPasswordInput`);
let wrongMsg=document.getElementById(`wrongMsg`);
let redirect=document.getElementById(`redirect`);
let sessionUserName;
let userInfo;

////////////////////////////////////////////////////////////////////
///////////////////sign uo function///////////////////////////////////////


if(localStorage.getItem(`token`) == null) ////condition to make sure local storage is not empty/////////////////
{
   userInfo=[]
}
else{
    userInfo=JSON.parse(localStorage.getItem(`token`))
    
}
////////////////////////////////////////////////////////


function signUp()
{

    userInputValidation();
    isExist();
  

    if (userInputValidation()==true && isExist()==false)//function to check validations//
    {

        
        let user={ ////object of coming inputs /////
            name:usernameInput.value,
            email:userEmailInput.value,
            password:userPasswordInput.value
        };
        
        userInfo.push(user );/////arrray of objects//
        localStorage.setItem(`token`,JSON.stringify(userInfo)) ;////saving data in local storage///////
        let confirmMessage =document.getElementById(`confirmMsg`);
        confirmMessage.classList.replace(`d-none`,`d-block`);
        let signin=document.getElementById(`signin`);
        signin.classList.replace(`d-none`,`d-block`);
         
        let signupBtn=document.getElementById(`signupBtn`);
        signupBtn.classList.add(`disabled`);
        let tryAgainMsg=document.getElementById(`tryAgainMsg`);
        tryAgainMsg.classList.replace(`d-block`,`d-none`);
        accountExistMsg.classList.replace("d-block", "d-none");

        usernameInput.value=``;
        userEmailInput.value=``;
        userPasswordInput.value=``



    }
    else
    {
        
       
     let tryAgainMsg=document.getElementById(`tryAgainMsg`);
     tryAgainMsg.classList.replace(`d-none`,`d-block`);
     usernameInput.classList.remove(`is-invalid`);
     usernameAlert.classList.replace(`d-block`,`d-none`);
    
    }   
}

//////////////////////////end of sign up function////////////////////////////////////////////////////////////////////
/////////////////////////// user name validation function///////////////////////////////////////////////////////////////////

function useerNameValidation()
{

    let usernameAlert=document.getElementById(`usernameAlert`);

    let regix = /^[a-zA-z]{3,10}$/;
if (regix.test(usernameInput.value)== true && usernameInput!=``)
{
    usernameInput.classList.add(`is-valid`);
    usernameInput.classList.remove(`is-invalid`);
    usernameAlert.classList.replace(`d-block`,`d-none`);
    return true
}
else{
    usernameInput.classList.add(`is-invalid`);
    usernameInput.classList.remove(`is-valid`);
    usernameAlert.classList.replace(`d-none`,`d-block`);
    return false
}

}
//////////////////////////////////////////////////////////////////////////////////////

/////////////////////////// user password  validation function///////////////////////////////////////////////////////////////////

function userPassword ()
{


  let userPasswordAlert=document.getElementById(`usernameAlert`);

    let regix=/^.{5,15}$/;
    if(regix.test(userPasswordInput.value)== true && userPasswordInput.value!=``)
    {
     
        userPasswordInput.classList.add(`is-valid`);
        userPasswordInput.classList.remove(`is-invalid`);
        userPasswordAlert.classList.replace(`d-block`,`d-none`);
       
     return true
    }
    else{
        userPasswordInput.classList.add(`is-invalid`);
        userPasswordInput.classList.remove(`is-valid`);
        userPasswordAlert.classList.replace(`d-none`,`d-block`);
       return false
    }

}
//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////// user email  validation function///////////////////////////////////////////////////////////////////


function userEmailValidation()
{
    let userEmailAlert=document.getElementById(`userEmailAlert`);
   
let regix = /@[a-z]{5,10}(\.com)$/;

if(regix.test(userEmailInput.value)==true && userEmailInput!=`` )

{
    userEmailInput.classList.add(`is-valid`);
    userEmailInput.classList.remove(`is-invalid`);
    userEmailAlert.classList.replace(`d-block`,`d-none`);
   
 return true
}
else{
    userEmailInput.classList.add(`is-invalid`);
    userEmailInput.classList.remove(`is-valid`);
    userEmailAlert.classList.replace(`d-none`,`d-block`);
   return false
}
    
}


//////////////////////////////////////////////////////////////////////////////////////

/////////////////////////valiation//////////////////////////////////////
function userInputValidation()
{
  if(useerNameValidation()==true && userPassword()==true && userEmailValidation()==true )
  {
   
      return true
     
  }
  else
  {
      return false
  }
}

///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////isExist validation//////////////////////////////////


function isExist()
{


    
    let accountExistMsg = document.getElementById("accountExistMsg");
    
    for(let i = 0; i < userInfo.length; i++)
    {

        if( userInfo[i].email.toLowerCase() == userEmailInput.value.toLowerCase())
        {
            accountExistMsg.classList.replace("d-none", "d-block");
            usernameInput.classList.remove("is-valid");
            userEmailInput.classList.remove("is-valid");
            userPasswordInput.classList.remove("is-valid");
          
            return true
        }
        
    }

    console.log(`3`)
    return false
    
}
  /////////////////////////////////////////////////////////////////////////////////////////////


  ////////////////////////////////////////login function /////////////////////////


  function login ()
  {

   let loginEmail=document.getElementById(`loginEmail`);
   let loginPassword=document.getElementById(`loginPassword`);

   if(loginEmail.value==`` || loginPassword.value==``)
   {
    let fillMsg=document.getElementById(`fillMsg`);
    fillMsg.classList.replace(`d-none`,`d-block`);
    
   }
       
   for (let i = 0; i < userInfo.length; i++) {
    
       if(userInfo[i].email.toLowerCase() == loginEmail.value.toLowerCase()
       && userInfo[i].password.toLowerCase() == loginPassword.value.toLowerCase() )
       {

        localStorage.setItem(`usertoken`,userInfo[i].name);

        let loginBtn=document.getElementById(`loginBtn`);

        loginBtn.setAttribute(`href`,`welcome.html`);
        wrongMsg=document.getElementById(`wrongMsg`)
        wrongMsg.classList.remove(`d-block`);
        return false
       }
       else
       {
       
        wrongMsg=document.getElementById(`wrongMsg`)
         wrongMsg.classList.replace(`d-none`,`d-block`);

       }

   }

   if(localStorage.getItem(`tooken`)==null)
   {
 
    wrongMsg=document.getElementById(`wrongMsg`)
     wrongMsg.classList.replace(`d-none`,`b-block`);

   }
  }
 


  sessionUserName=localStorage.getItem(`usertoken`);
 
  ///////////////////////////////////////////////////////////////////////////////////////////////

  ///////////welcome function ///////////////////////////////////////////////////

  function displayWelcomeUser ()
  {

document.getElementById(`username`).innerHTML="welcome "+ sessionUserName


  }

  /////////////////////////////////////////////////////////////////////////////



  //////////////////////logout function///////////////////////////////
  
  function logout()
  {

    // localStorage.removeItem(`token`);
    localStorage.removeItem(`usertoken`);
  }


    
    
     

    

    





