const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click",() => home.classList.add("show"));
formCloseBtn.addEventListener("click",() => home.classList.remove("show"));

pwShowHide.forEach(icon => {
   icon.addEventListener("click", () => {
    let getPwInput =icon.parentElement.querySelector("input");
    if(getPwInput.type=== "password"){
        getPwInput.type="text";
        icon.classList.replace("bx-low-vision","bx-show-alt");
    }else{
        getPwInput.type="password";
        icon.classList.replace("bx-show-alt","bx-low-vision"); 
    }
   })
});

signupBtn.addEventListener("click",(e) => {
e.preventDefault();
formContainer.classList.add("active");
});

loginBtn.addEventListener("click",(e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      }
      
      // Example usage:
      const email = 'example@example.com';
      if (validateEmail(email)) {
        console.log('Valid email address');
      } else {
        console.log('Invalid email address');
      }

  
      
// categry page 
function Redirect()
{
    window.location="category";
}