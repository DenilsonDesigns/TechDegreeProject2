//javascript and the DOM
//making changes to the DOM.removing_nodes

const input= document.querySelector('input.description');
const p= document.querySelector('p.description');
const button= document.querySelector('button');

button.addEventListener('click', ()=> {
    p.textContent= input.value;

});

