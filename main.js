const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("#elementList");
const empty = document.querySelector(".empty");
const contaTarea=document.querySelector("#contaTarea");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;
  if (input.value == 0) {
    alert("Agrega una tarea")

 

  }else{
    var check = document.createElement("input");
    check.type = "checkbox";
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    check.addEventListener("change", count);

    li.appendChild(check);
    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);


    input.value = "";
    empty.style.display = "none";

  }
});
function count(){
  var contador = 0;
  var lista = document.querySelectorAll("input[type='checkbox']");

  for (let index = 0; index < lista.length; index++) {
    if (lista[index].checked) {
      contador++;
     
    }
    
  }
  contaTarea.textContent=contador;
 return  console.log(contador);

};
function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {

      empty.style.display = "block";


    }count();
  });

  return deleteBtn;
}




