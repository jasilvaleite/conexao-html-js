const logoElement = document.getElementById('logo');
console.log(logoElement);

const postAuthor = document.getElementsByClassName('post-autor');
console.log(postAuthor)

const post02 = document.getElementById('post02');
console.log(post02);
 
const formulario = document.getElementById('formulario');
console.log(formulario);

const posts = document.getElementsByClassName('posts');
console.log(posts)

const postdata = document.getElementsByClassName('post-data');
console.log(postdata)

const posttexto = document.getElementsByClassName('post-texto');
console.log(posttexto)

const lista_redes = document.getElementsByClassName('lista_redes')
console.log(lista_redes)

const linkNotexto = document.querySelector
('#post01 .post-texto')
console.log(linkNotexto)

const palavraNegrito = document.querySelector
('#post02 .post-texto strong')
console.log(palavraNegrito)
///
const inputNome = document.querySelector
('#nome')
console.log(inputNome)


function imprimirTextos(nodelist) {
  nodelist.forEach(function(element){ 
    console. log(element.innerText) 
  })
}

const linksRedes = document.querySelectorAll
('.lista_redes a');
imprimirTextos(linksRedes)

const titulospostes = document.querySelectorAll
('#post01 .post-autor, #post02 .post-autor')
imprimirTextos(titulospostes)
