console.log("hello world ");
[...document.getElementsByClassName("product-filer")].forEach(element => {
    
   element.addEventListener("click",filter)
});


function filter(){
    [...document.getElementsByClassName("images")].forEach(ele => {
        console.log(ele.dataset.product)
    
     if(event.target.dataset.item==ele.dataset.product){
        ele.style.display="block"; 
    }
    
    else if(event.target.dataset.item==1){
        
        ele.style.display="block"; 
    }
    else{
     
    
        ele.style.display="none"; 

    }


     });

    
}