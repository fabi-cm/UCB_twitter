import mostrar_post from "./mostrar_posts";

const titulo = document.querySelector("#titulo");
const detalle = document.querySelector("#detalle");
const post_form = document.querySelector("#post-form");
const div_post = document.querySelector(".div_post");
const item_post = document.querySelector(".item-post");

let posts = [];

post_form.addEventListener("submit", (event) => {
  event.preventDefault();

  const objPost = {
    id: Date.now(),
    titulo: titulo.value,
    detalle: detalle.value,
  }

  posts = [...posts, objPost];
  post_form.reset();
  mostrar_post(posts, div_post);
});