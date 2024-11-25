console.log('createAccount.js connected')
class formValidation{
    constructor(){
        this.validatingFields={
           
            username:document.getElementById('username'),
            
            email:document.getElementById('email'),
            pwd:document.getElementById('pwd'),
            confirmPwd:document.getElementById('confirmPwd'),
            sendBtn:document.getElementById('sendBtn')
        }
        console.log(this.validatingFields.sendBtn.innerHTML)
        this.Msg={
            userNameMsg:document.getElementById('userNameMsg'),
            emailMsg:document.getElementById('emailMsg'),
           pwdMsg:document.getElementById('pwdMsg'),
           confirmPwdMsg:document.getElementById('confirmPwdMsg')
        }
        
        
        this.validatingFields.username.addEventListener('input',this.validateUsername.bind(this))           
        this.validatingFields.email.addEventListener('input',this.validateEmail.bind(this))           
        this.validatingFields.pwd.addEventListener('input',this.validatePwd.bind(this));
        this.validatingFields.confirmPwd.addEventListener('input',this.validatePwdConfirmation.bind(this));
        this.validatingFields.sendBtn.addEventListener('click',this.finalSubmision.bind(this));
        this.isValid={
            username: false,
            email: false,
            pwd: false,
            confirmPwd: false
        }
        
         }
    validateUsername(event){
       const usernameValue=event.target.value;
       if(usernameValue){
           this.isValid.username=true;
       }
    }
    validateEmail(event){
       const emailValue=event.target.value;
       if(emailValue){
           this.isValid.email=true;
       }
    }
    validatePwd(event){
        this.inputPwdValue= event.target.value;
        
        if(this.inputPwdValue.length<10){
           this.Msg.pwdMsg.textContent=`password must be more than 10 characters❌`;
        this.Msg.pwdMsg.classList.add('negative')
      
            
        }
        else{
           this.isValid.pwd=true; this.Msg.pwdMsg.innerHTML='correct✅';
           this.Msg.pwdMsg.classList.add('positive')
        }
    }
    validatePwdConfirmation(event){
        let confirmInputValue= event.target.value;
        if(confirmInputValue!==this.inputPwdValue){
           this.Msg.confirmPwdMsg.textContent=`password does not match`
            this.Msg.confirmPwdMsg.classList.add('negative')
            
        }
        else{
           this.isValid.confirmPwd=true; this.Msg.confirmPwdMsg.textContent=`password  matched ✅`
     this.Msg.confirmPwdMsg.classList.add('positive')
        }
       
    }
    finalSubmision(event){
        event.preventDefault();
       this.isFormValid=Object.values(this.isValid);
     
      if(this.isFormValid.some(value=>value===false)){
          alert('make sure all the fileds have been filled correctly')
      }
      else{
       alert('form submitted');
        document.querySelector('form').submit();
      }
    }
}
new formValidation();