console.log('footer connected ')
class footer extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:'open'});
        this.render()
    }
    render(){
    this.footer=document.createElement('template');
        this.footer.innerHTML=`
        <style>
            :host{
                height: 100%;
            }
            .footerContainer{
                position:  relative;
                bottom: 0;
                border-top: 2px solid #fafafa;
                
                width: 100%;
                background: black;
                color: #fafafa;
                display: flex;
                gap: 2em;
                height: fit-content;
                background: #fafafa;
            }
               .footerContainer ul{
                   display: flex;
                   gap: 2em;
                   flex-direction: column;
               }
            .footerContainer li{
                list-style: none;
                float: left;
            }
             .footerContainer li a{
                 color:  #333333;
                 text-decoration: none;
                 
                 
             }
            </style>
        <div class='footerContainer'>
        
                <ul>
                    <li>
                        <a href="mailTo: dalisobanda156@gmail.com">email</a>
                    </li>
                    <li>
                        <a href="Tel: 0976557875">call</a>
                    </li>
                    <li>
                        <a href="">WhatsApp</a>
                    </li>
                    <li>
                        <a href="mailTo: dalisobanda156@gmail.com">Facebook</a>
                    </li>
                    <li>
                        
                    
                </ul>
                <ul>
                  <li>  <a href="mailTo: dalisobanda156@gmail.com">Instagram</a>
                    </li>
                
                  <li>
                        <a href="">copy rights </a>
                    </li>
                    <li>
                        <a href="">
                            Terms and conditions
                        </a>
                        </li>
                        
                       
                    </ul>
                    
               
            </div>
        `
        this.shadowRoot.appendChild(this.footer.content.cloneNode(true));
    }
    
}
 customElements.define('js-myfooter',footer)