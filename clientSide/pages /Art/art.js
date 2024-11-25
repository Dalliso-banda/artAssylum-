class populatePage{
    constructor(){
      this.processApi()  
    }
    processApi(){
        this.url='https://www.wikiart.org/en/app/api/popularartists?json=1';
        fetch(this.url,{
            mode:'cors'
        }).then((res)=>{
     
             if(!res.ok){
                 throw  `server problems ${res.status} ${res.statusText} ${res.url}`
             }
             else{
                 res.json();
             }
                   
                   } ).then((data)=>console.log(JSON.stringify(data))).catch(error=>console.log(error))
    }
    
}
new populatePage