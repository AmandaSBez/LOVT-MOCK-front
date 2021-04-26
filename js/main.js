console.log('JS externo funcionou!');

//alert('Seja bem vindo(a)!');

//let adulto = confirm('Você tem mais de 18 anos?'); //retorna um booleano

let nomeUsuario = prompt('Qual é seu nome?'); //retorna texto escrito pelo usuario

console.log(nomeUsuario);

let elementHeader = document.querySelector('.olaUsuario');
elementHeader.innerText = `Olá, ${nomeUsuario}`;