const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //이걸 하면 바로 시간을 볼 수 O 만약 없으면 1초 뒤부터 볼 수 O
setInterval(getClock, 1000);


//Interval: '매번' 일어나야 하는 무언가, 지정된 주기로 특정 코드를 실행
//Timeout: 지정된 초가 지난 후 특정 코드를 1회 실행
//.padStart(): 앞쪽에 padding을 추가해줌
//.padEnd(): 뒷쪽에 padding을 추가해줌