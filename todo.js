const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //우리가 클릭한 li.id와 다른 toDo는 남겨둠
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //input의 현재 value를 새로운 변수에 복사함, input의 value를 비우기 전의 값을 나타내는 string
    toDoInput.value = ""; //엔터를 누를 때마다 값이 사라짐
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj); // newTodo를 빈 array였던 toDos array에 push
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDOs = JSON.parse(savedToDos);
    toDos = parsedToDOs; //toDos array를 가지고 와서 toDos array에 복원해줌
    parsedToDOs.forEach(paintToDo);
    //이 funtion을 호출하면서 array에 있는 각각의 item을 줌
    //parsedToDOs.forEach((item) => console.log("this is the turn of", item));
    //위의 방법과 아래의 방법은 동일
    //function sayHello(item) {
    //    console.log("this is the turn of", item);
    //}
}



//event가 클릭된 위치를 알려줌
//.parentElement(): 클릭된 element의 부모
//JSON.stringify(): 무엇이든지 string으로 바꿔줌
//.forEach(): array의 각 item에 대해 function을 실행해줌
//=> : arrow funtion