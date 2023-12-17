const button1= document.getElementById('button1');
const button2= document.getElementById('button2');
const main= document.getElementById('main');

button1.addEventListener('click', function(){
    main.style.backgroundColor='red';
})
button2.addEventListener('click', function(){
    main.style.backgroundColor='green';
})
