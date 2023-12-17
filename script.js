const Create = document.getElementById('Create1');
const Clear = document.getElementById('Clear1');
const wrapper = document.getElementById('wrapper1');

Create.addEventListener('click', function(){
    const newBut = document.createElement('button');
    newBut.addEventListener('click', function(){
        wrapper.innerHTML = '';
    });
    newBut.style.width = '200px';
    newBut.style.height = '100px';
    wrapper.insertAdjacentElement('afterbegin',newBut);
 });

 Clear.addEventListener('click', function(){
    wrapper.innerHTML = '';
});