

const header = document.querySelector(".header");

const content = document.createElement("div");
content.className = "main";
document.body.appendChild(content);


const btn = document.createElement("button"); 
header.appendChild(btn);
btn.className = "gridBtn";
btn.textContent = "Change grid size";




function createDivs(num){

  
        
    
    
     
    for(let i=0; i<num; i++)
    {
        const container = document.createElement("div");
        container.className = "container";
        content.appendChild(container);
        for(let i=0; i<num; i++){
            const div = document.createElement("div");
            div.className = "test";  
            if(MouseEvent) 
            div.addEventListener("mousedown", function()
            { div.classList.add("active");});  
            
            container.append(div);
            
            


            
        }   
    }


}

createDivs(16);
 
btn.addEventListener("click", function(){
    x = prompt("Enter the size of the grid");
    
    if(x<=100)
    {
    content.replaceChildren();
    createDivs(x);
    }
    else{
        content.replaceChildren();
        const warning = document.createElement("div")
        warning.className = "warning";
        warning.textContent = "Maximum grid size is 100, try something else."
        content.appendChild(warning);
    }
    

} );





















