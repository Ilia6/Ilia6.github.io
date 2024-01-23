///////////////////////////////////////////////////////////1

const btn1 = document.getElementById('btn1');
const div1 = document.getElementById('div1');

btn1.addEventListener('click', func1);

function func1() {
    const div = document.createElement("div");
    div.textContent = " Это div1";
    div1.appendChild(div);
}


/////////////////////////////////////////////////////////2
const btn2 = document.getElementById('btn2');
const div2 = document.getElementById('div2');

btn2.addEventListener('click', func2);

function func2() {
    const div = document.createElement("p");
    div.textContent = " Это p2";
    div2.appendChild(div);
}
////////////////////////////////////////////////////////3
const btn3 = document.getElementById('btn3');
const div3 = document.getElementById('div3');

btn3.addEventListener('click', func3);

function func3() {
    const div = document.createElement("img");
    div.textContent = " Это img3";
    div3.appendChild(div);
}

//////////////////////////////////////////////////////4

const btn4 = document.getElementById('btn4');
const div4 = document.getElementById('div4');

btn4.addEventListener('click', func4);

function func4() {
    const div = document.createElement("ul");
    div.textContent = " Это ul4";
    div4.appendChild(div);
}

////////////////////////////////////////////////////5
const btn5 = document.getElementById('btn5');
const div5 = document.getElementById('div5');

btn5.addEventListener('click', func5);

function func5() {
    const div = document.createElement("li");
    div.textContent = " Это li5";
    div5.appendChild(div);
}


///////////////////////////////////////////////////6

const btn6 = document.getElementById('btn6');
const div6 = document.getElementById('div6');

btn6.addEventListener('click', func6);

function func6() {
    const div = document.createElement("table");
    div.textContent = " Это table6";
    div6.appendChild(div);
}

/////////////////////////////////////////////////////7
const btn7 = document.getElementById('btn7');
const div7 = document.getElementById('div7');

btn7.addEventListener('click', func7);

function func7() {
    const div = document.createElement("tr");
    div.textContent = " Это tr7";
    div7.appendChild(div);
}

/////////////////////////////////////////////////8

const btn8 = document.getElementById('btn8');
const div8 = document.getElementById('div8');

btn8.addEventListener('click', func8);

function func8() {
    const div = document.createElement("td");
    div.textContent = " Это td8";
    div8.appendChild(div);
}


/////////////////////////////////////////////////9
const btn9 = document.getElementById('btn9');
const div9 = document.getElementById('div9');

btn9.addEventListener('click', func9);

function func9() {
    const div = document.createElement("h1");
    div.textContent = " Это h19";
    div9.appendChild(div);
}


////////////////////////////////////////////////10
const btn10 = document.getElementById('btn10');
const div10 = document.getElementById('div10');

btn10.addEventListener('click', func10);

function func10() {
    const div = document.createElement("span");
    div.textContent = " Это span10";
    div10.appendChild(div);
}
