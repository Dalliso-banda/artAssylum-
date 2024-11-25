class back extends HTMLElement{
    constructor(){
        super();
        this.render()
        this.backFunc()
    }
    render(){
        this.backBtn= document.createElement('button');
        this.backBtn.innerHTML=`
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
       
        <i class="fa fa-arrow-circle-left" id="backBtn" >
        
    </i>`;
    this.backBtn.style='color: #fff; font-size:1em; background: black; border: none; outline: none'
    this.appendChild(this.backBtn)
    }
    backFunc(){
        this.backBtn.addEventListener('click',()=>{
            window.history.back()
            console.log(window.history.back)
        })
    }
}
customElements.define('back-btn',back);