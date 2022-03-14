//variables
const todoInput = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("ul");

let todoArray = new Set();
let user;

//function to add new todo item
const addTodo = () => {
  if (todoArray.size != 5) {
    if (todoInput.value != "") {
      todoInput.parentElement.classList.remove("error");
      todoArray.add(todoInput.value);

      if (user) {
        let db = [...todoArray]; //spreads the content of todoArray into db
        let _db = JSON.stringify(db); //_db is the string form of db array
        localStorage.setItem(user, _db);
        setTodo(todoArray);
      } else {
        setTodo(todoArray);
      }
    } else {
      todoInput.parentElement.classList.add("error");
    }
    todoInput.value = "";
  } else {
    alert("you have five things to do");
  }
};
//event handlers
addBtn.addEventListener("click", addTodo);

const setTodo = (arr) => {
  let htmlArr = "";

  for (el of arr) {
    let html = `<li id=${el}>
          <div class ="todo">
          <p>${el}</p>
          <input type="text" class="hide"/>
           </div>

          <div class ="btns">
          <button>Edit</button>
          <button>Save</button>
          <button>Delete</button>
          </div>
        </li>`;
    htmlArr += html;
  }
  todoList.innerHTML = htmlArr;
  // informText()
};

//sing in functions
const signin = document.querySelector(".logo-wrap p");
const modal = document.querySelector("#modal");
const useNm = document.querySelector("input");
const singBtn = document.querySelector("button");
const disModal = document.querySelector("span");

signin.addEventListener("click", () => {
  modal.style.display = "flex";
});

disModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  e.target == modal ? (modal.style.display = "none") : null;
});

//function to log in user and save todo list
singBtn.addEventListener("click", () => {
  let user = useNm.value;
  if (user == "") {
    useNm.classList.add("error");
  } else {
    useNm.classList.remove("error");
    signin.innerText = user; //changing 'the sign in text to username'
    signin.innerText = user;
    todoArray.clear();
    setTodo(todoArray);
    useNm.value = "";
    let db = [...todoArray];
    let _db = JSON.stringify(db);
    let userData = localStorage.getItem(user);

    if (userData) {
      let _userData = JSON.parse(userData);
      todoArray = new set(_userData);
      setTodo(todoArray);
      modal.style.setItem(user, _db);
    } else {
      localStorage.setItem(user, _db);
      modal.style.display = "none";
    }
  }
});
