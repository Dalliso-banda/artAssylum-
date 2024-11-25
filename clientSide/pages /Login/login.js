alert('connected..')
class validation{
    constructor(){
    this.fields={
        email: document.getElementById('email'),
        password: document.getElementById('password'),
        emailMsg: document.getElementById('emailErrorMsg'),
        pwdMsg: document.getElementById('pwdErrorMsg')      
        }
       
        this.fields.email.addEventListener('input',this.validateEmail.bind(this))
        this.fields.password.addEventListener('input',this.validatePwd.bind(this))
        
    }
    validateEmail(event){
    const emailValue=event.target.value;
   if(emailValue.length<3){
       this.fields.emailMsg.innerHTML=' ';
        this.fields.emailMsg.textContent='email must be longer'
        this.fields.emailMsg.classList.add('negative');
       }
       else{
              this.fields.emailMsg.innerHTML='';
          this.fields.email.classList.add('positive');    
       }
        
    }
    validatePwd(event){
    let pwdValue= event.target.value;
   
       if(pwdValue.length<10){
      this.fields.pwdMsg.classList.add('negative');
       this.fields.pwdMsg.textContent='pwd must have at least one 10 characters';
       
       }
       else{
          this.fields.pwdMsg.innerHTML='';
          this.fields.password.classList.toggle('positive');
       }
    }
    
}
new validation();