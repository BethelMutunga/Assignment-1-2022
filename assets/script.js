let input = document.querySelector('.userinput');
let button = document.querySelector('.btn');
let p = document.querySelector('.par');

function answer() {
    button.addEventListener('click',()=>{
        p.innerText = `Hello, ${input.value} Welcome to Bootcamp`
    })

}
