const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("#elementList");
const empty = document.querySelector(".empty");
const contaTarea = document.querySelector("#contaTarea");
addBtn.addEventListener("keypress", addTask);
addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  addTask();
});
function addTask() {
  const text = input.value.toLowerCase(); // Convertir a minúsculas

  var lista_tarea = document.querySelectorAll(".textoTarea");
  var ExisteTarea = false;

  for (let index = 0; index < lista_tarea.length; index++) {
    var TextoP = lista_tarea[index];
    if (TextoP.textContent.toLowerCase().trim() === text.toLowerCase().trim()) {
      // Comparar en minúsculas
      ExisteTarea = true;
      break; // Salir del bucle si se encuentra una tarea repetida
    }
  }

  if (text.trim().length === 0) {
    Swal.fire({
      title: 'Porfavor agrega una tarea',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  } else if (ExisteTarea) {
    Swal.fire({
      icon: 'error',
      title: 'Esta tarea ya existe',
      text: 'digita otra tarea',
      footer: 'ʕ•́ᴥ•̀ʔっ'
    });
  } else {
    var check = document.createElement("input");
    check.type = "checkbox";
    check.classList.add("check-button");
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.classList.add("textoTarea");
    p.textContent = text;

    check.addEventListener("change", count);

    li.appendChild(check);
    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
}
function count() {
  var contador = 0;
  var lista = document.querySelectorAll("input[type='checkbox']");

  for (let index = 0; index < lista.length; index++) {
    if (lista[index].checked) {
      contador++;
    }
  }
  contaTarea.textContent = contador;
  return console.log(contador);
}
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
    }
    count();
  });

  return deleteBtn;
}
