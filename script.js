const buttons=document.querySelectorAll(".btn");
const items=document.querySelectorAll(".item");

buttons.forEach(elmt=>{
    
    elmt.addEventListener("click",(e)=>{
        e.preventDefault();
        const filter=e.target.textContent.toLowerCase();
        filteredMenu(filter);
    })
});

const filteredMenu=filter=>{
   
    items.forEach(item=>{
        
        Array.from(item.children[0].children).filter(f=>{

            if(!f.classList.contains(filter)){
                f.parentElement.parentElement.classList.add("filtered");
            }else{
                f.parentElement.parentElement.classList.remove("filtered");
            }
        });
        
    });
}