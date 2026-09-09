let input = document.querySelector(".input-field");
let btn = document.querySelector(".btn");
let tasklist= document.querySelector(".task-list");
let form = document.querySelector(".form");

form.addEventListener("submit",(e)=>{
e.preventDefault();

    if(input.value === ""){
        alert("write any task 1st");
        return;
    }
    
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox">  ${input.value}<i class=" fa-solid fa-trash"></i>`;
        tasklist.appendChild(li);
        input.value = "";


        let dbtn = li.querySelector("i");
dbtn.addEventListener("click",()=>{
   li.remove();

})
})

