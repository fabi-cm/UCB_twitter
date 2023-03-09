import max_caracteres from "./max_caracteres";

function verificar_titulo(titulo, titulo_obligatorio) {
    let resp = false;
    if (!titulo.trim()) {
        titulo_obligatorio.textContent = 'Titulo Obligatorio';
  
        setTimeout(() => {
            titulo_obligatorio.textContent = '';
        }, 2000)
        resp = true;
    }
    resp = max_caracteres(50, titulo.length);
    if(resp){
        titulo_obligatorio.textContent = 'maxima cantidad de caracteres';
  
        setTimeout(() => {
            titulo_obligatorio.textContent = '';
        }, 2000)
    }
    return resp;
}
export default verificar_titulo