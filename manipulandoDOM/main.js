//const itens = document.querySelector(".items");
//const button = document.querySelector(".btn");

//itens.remove();


//seleciona o primeiro filho da class items
//itens.firstElementChild.remove();

//seleciona o ultimo 
//itens.lastElementChild.remove();

//voce pode selecionar um item dentro da lista para manipular 
//itens.children[2].textContent = "tchola";


//muda o css de um elemento do html
//button.style.background = "red";~


const submitButton = document.querySelector('#submit-button');
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const itens = document.querySelector('.items')

submitButton.addEventListener("click", function (e){
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if(nameValue === "" || emailValue === "") {
        alert("preecha os dados requeridos!!");
    }

    itens.firstElementChild.textContent = nameValue

    itens.children[1].textContent = emailValue
})