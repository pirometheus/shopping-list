const list = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const array=[];
btn.addEventListener("click", ()=>{
    
    const myItem = input.value;
    input.value = "";
    array.push(myItem);

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.textContent = myItem;
    listItem.appendChild(listText);
    listBtn.textContent = "Delete";
    listItem.appendChild(listBtn);
    list.appendChild(listItem);
    // listItem.setAttribute("style", "display: flex; justify-content: space-between;")

    listBtn.addEventListener("click", ()=> {
        listItem.remove();
        array.remove
    });

    input.focus();
    console.log(array);
});