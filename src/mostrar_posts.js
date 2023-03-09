function mostrar_post(posts, div_posts) {
    div_posts.innerHTML = '';
    if (posts.length > 0) {
        posts.forEach((item) => {
            const itemNota = document.createElement('div');
            itemNota.classList.add("item-post");
            itemNota.innerHTML = `
                <p><strong>${item.titulo}:</strong><br>${item.detalle}</p>
            `
            div_posts.appendChild(itemNota);
        })
    } else {
        const mensaje = document.createElement('p');
        mensaje.textContent = "Lista de post esta vacia";
        div_posts.appendChild(mensaje);
    }

}
export default mostrar_post;