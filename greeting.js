//1번째 방법 - html에서 from을 찾고있음

//const loginForm = document.getElementById("login-form");
//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");

//2번째 방법
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    painGreetings(username);
}

function painGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    //greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername =  localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    painGreetings(savedUsername);
}

//const username = loginInput.value; input의 내용을 가져오려면 value를 사용
//console.log("click !!!"); 로그인 버튼을 클릭하면 콘솔에 click !!!이 뜸
//submit은 엔터를 누르거나 버튼을 클릭할 때 발생
//.preventDefault()을 호출하면 브라우저의 기본 동작(새로고침)을 막아줌
//.addEventListener() 안에 있는 함수는 우리가 직접 실행 x (= ()하면 안됨) 