console.log('navBar connected');
class navBar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.render();
        this.slideEffect();
    }
    render(){
        let navBar= document.createElement('template')
        navBar.innerHTML=`
     
        <style>
        .logo{
         display: none;         
     }
 .container{
     position: fixed;
     z-index: 1000;
     background: black;
     height: fit-content;
     width: 100%;
     max-height: 9%;
     top: 0;
     border-bottom: 1px solid #fafafa;
 }           


i{
    font-size: 2em !important;
    color: white;
    margin-left: 3%;
    margin-top:4%;
    
}
ul{
    background: black;
    height: fit-content ;
    width: 100%;
    display: flex; 
    flex-direction: column;
    gap: 2em;
    opacity: 0;
    justify-content: center;    
    align-items: center;   
     transform: scaley(0);   
    transition: 3s;
    list-style: none;
    padding-left: 2%;
    
  
    
}
.desktopView{
    display: none;
}
li{
   list-style: none;
   margin-left: 0;
   
}
ul li a{
    text-decoration: none;
    color: white;
   
    
}

.show{
  opacity: 1;
  transform:scaley(1);
  z-index: 2;
}
@media only screen and (min-width: 768px){
     .logo{
         display: flex;
         color: red;
         margin-left: 2%;
        word-spacing: 10px;
     }
     .logo span{
         color: #8098ff;
     }
    .container{
        display:flex;
        align-items: center;
        height: fit-content;
        position: fixed;
    }
  #menu{
      display: none;
      
  }
   #navMenu{
    transform: scaley(1) !important;
    opacity: 1;
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 3%;
    gap: 5%;
    }
    ul li{
        margin: 3%;
    }
    .desktopView{
    display: flex;
}
    ul li:hover{
        background: ;
    }
    
}
            </style>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
              <div class="container">       
   
  <i  class="fa fa-bars" id="menu">
            </i>
            <h5 class='logo'> 
                
  <span>ART</span>
                   &nbsp;ASYLUM</h5>
  
      <ul id="navMenu">
         <li>
          <a href="" >
               home
                </a>
         </li>
          <li>
             
         <a href="http://localhost:5050/pages%20/Login/login.html?">  
              login
         </a>
         </li>
          <li>
            <a href="">
               Search 
            </a> 
         </li>
         <li>
             <a href="">
                 Post
             </a>
         </li>
         <li class='desktopView'>
             <a href="http://localhost:5050/pages%20/createAccount/createAccount.html">
                 Become Creator 
             </a>
         </li>
      </ul>
 
  </div>
                 
        `
        this.shadowRoot.appendChild(navBar.content.cloneNode(true));
        
    }
    slideEffect(){
        this.faMenu =this.shadowRoot.getElementById('menu');
        this.slidingUl=this.shadowRoot.getElementById('navMenu');
        this.faMenu.addEventListener('click',(event)=>{
           this.slidingUl.classList.toggle('show')
        })
        }
}
customElements.define('js-mynav',navBar)
