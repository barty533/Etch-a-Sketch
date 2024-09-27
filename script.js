const content = document.querySelector("body");
const container = document.createElement("div");
container.className = "container";


function createDivs(num){

    for(let i=0; i<num; i++)
    {
        const div = document.createElement("div");
        div.className = "test";
        container.append(div);
    }

}




content.appendChild(container)

createDivs(256);