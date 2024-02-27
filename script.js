let add = document.querySelector(".btn");
let inputBox = document.querySelector("#inputBox");
let listContainer = document.querySelector("#list-container");

add.addEventListener("click", () => {
  if ((inputBox.value == "")) {
    alert("Please enter your task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = `${inputBox.value} <i class="ri-delete-bin-5-line"></i>`;
    listContainer.appendChild(li);
    inputBox.value= ""

    li.querySelector("i").addEventListener("click", ()=>{
        li.remove()
    })
  }
});
