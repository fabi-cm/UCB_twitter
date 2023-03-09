function max_caracteres(num_caracteres, cant_len){
    let resp = true;
    if (cant_len <= num_caracteres){
        resp = false;
    }
    return resp;
}

export default max_caracteres;