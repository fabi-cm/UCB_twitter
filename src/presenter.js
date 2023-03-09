import mostrar_post from "./mostrar_posts";
import verificar_titulo from "./verificar_titulo";

const titulo = document.querySelector("#titulo");
const detalle = document.querySelector("#detalle");
const post_form = document.querySelector("#post-form");
const div_post = document.querySelector(".div_post");
const titulo_obligatorio = document.querySelector("#titulo_obligatorio")
const item_post = document.querySelector(".item-post");

let posts = [];

post_form.addEventListener("submit", (event) => {
  event.preventDefault();
  if(verificar_titulo(titulo.value,titulo_obligatorio)){
    return;
  }
  const objPost = {
    id: Date.now(),
    titulo: titulo.value,
    detalle: detalle.value,
  }
  posts = [...posts, objPost];
  post_form.reset();
  mostrar_post(posts, div_post);
});