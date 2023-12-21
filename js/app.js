let amigos = [];

function adicionar(){
    //recuperar o nome digitado
    let amigo = document.getElementById('nome-amigo').value;
    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo)
    //adicionar o nome digitado na lista de amigos
    if (lista.textContent == ''){
        lista.textContent = amigo;
    }else{
        lista.textContent = lista.textContent + ', ' + amigo;
    }

    amigo = '';
}

function sortear(){
    embaralha(amigos);
}


function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').textContent = '';
}
