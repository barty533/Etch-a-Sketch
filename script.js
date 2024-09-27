const content = document.querySelector(".main");



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



