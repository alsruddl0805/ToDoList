// 현재 시간 & 요일 구현

function clock() {
    var now = new Date();
    var clockHours = now.getHours();
    var clockMinutes = now.getMinutes();
    var clockSeconds = now.getSeconds();
    var clockRes = document.querySelector("#clock");

        if (clockHours < 10) clockHours = "0" + clockHours;
        if (clockMinutes < 10) clockMinutes = "0" + clockMinutes;
        if (clockSeconds < 10) clockSeconds = "0" + clockSeconds;

    var dayIdx = now.getDay();
    var dayName = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    var dayOutPut = dayName[dayIdx];

    clockRes.innerHTML = clockHours + ":" + clockMinutes + ":" + clockSeconds + " " + dayOutPut;
}

clock();
setInterval(clock,1000);


// input 입력 후 엔터키 구현

const todolist = document.querySelector("#todolist");
const inputText = document.querySelector("#inputText");
var cnt = 1;

inputText.onkeyup = function(event) {
    if (event.which === 13) {
        var itemText = inputText.value;
        itemText = itemText.trim();
            if (!itemText || itemText === "") {
                alert("텍스트를 입력해주세요.");
                return false;
            };
        newList();
        inputText.value = "";
    }
}

function newList(){
    const listItem = document.createElement("li");
    const span = document.createElement("span");

    listItem.id = "li"+cnt;
    listItem.class = "liChk";
    listItem.innerHTML += "<i class='fa fa-minus' onclick='remove("+cnt+")'></i>";

    span.innerHTML = inputText.value;

    listItem.appendChild(span);
    todolist.appendChild(listItem);
    cnt++;
}

// done체크 구현 (jQuery)

$("#todolist").on('click','li', function(){
    $(this).toggleClass('liChk').show();
});

// 개별삭제 기능 구현

function remove(cnt) {
  var li = document.getElementById("li"+cnt);
  todolist.removeChild(li);
}

// 전체삭제 기능 구현

function allDelete() {
    todolist.innerHTML = "";
}

