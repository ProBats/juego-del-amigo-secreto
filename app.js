// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Funciones
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    //Verifico que la lista no este vacia
    if (nombreAmigo === "") {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }else if(amigos.map(nombre => nombre.toLowerCase()).includes(nombreAmigo.toLowerCase())){  //map es un metodo de los arrays que permite transformar cada elemneto de la array (en este caso mi condicion es que sea todo en minuscula) yu lo comparo con el nombre ingresado que tambien va a ser tomado en minuscula.
      // Verifico si el nombre ya existe en la lista
        LimpiarCaja();
        alert(`El amigo "${nombreAmigo}" ya está en la lista.`);
        return;
    } else {
      // Agrego el nuevo amigo a la lista
    amigos.push(nombreAmigo.charAt(0).toUpperCase() + nombreAmigo.slice(1).toLowerCase());
    //console.log(amigos);
    LimpiarCaja();
    mostrarAmigo();
    }
}

function mostrarAmigo(params) {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = '';
    
    //Recorro la lista
    //amigos.forEach(amigo => { listaAmigos.innerHTML +=`<li>${amigo}</li>`;});  //(Programacion funcional con funcion de flecha) como opcion
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    let indiceAleatorio = Math.floor(Math.random()* amigos.length);
    // Verifico que mi lista tenga al menos 2 amigos
    if (amigos.length <= 2) {
        alert('Se podra  realizar el sorteo a partir de 3 amigos');
        return;
    }
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    //Si mi lista tiene amigos, realizo el sorteo con el numero de indice random
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`
}

function LimpiarCaja() {
    let valorCaja = document.querySelector('#amigo').value = "";
}