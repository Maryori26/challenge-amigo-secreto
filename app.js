//1: Variable para almacenar los nombres de las amistades
let amigos = [];

//2: Implementar una función para agregar un nombre a la lista de amistades
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    //3: Validar la entrada y asegurarse de que no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre.');
        return;
     } //3.1: Primero validemos que solo contenga letras y espacios
     if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nombre)) {
        alert('Por favor, ingresa un nombre válido (solo letras y espacios).');
        input.value = ''; //3.2: Para borrar el campo de entrada invalido
        return;
     }//3.3: En caso el nombre este repetido
     if (amigos.some(a => a.toLowerCase() === nombre.toLowerCase())) {
        alert('Este nombre ya está en la lista.');
        return;
     }

 //4: Actualizar la lista de amigos
     amigos.push(nombre);
  //5: Limpiar el campo de entrada
    input.value = '';
    actualizarLista();
    }
//6: Mostrar la lista actualizada
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    //7: Limpiar la lista existente
    lista.innerHTML = '';
    //8: Usar un bucle y crear elementos de lista
    amigos.forEach((amigo, i) =>{
        //9: Crear un nuevo elemento de lista
        const li = document.createElement('li');
        li.textContent = `${amigo}`;
        lista.appendChild(li);
    });
} 
//10:Comenzar el sorteo
function sortearAmigo() {
    //11: Validar que no esté vacía la lista
    if (amigos.length < 2) {
        alert('Ingresa al menos dos nombres para realizar el sorteo, por favor.');
        return;}
    //12: Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    //13: Obtener el nombre sorteado
    const amigo = amigos[indiceAleatorio];
    //14: Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Tu amigo secreto es: <strong>${amigo}</strong>`;
    return;
}
//Función para reiniciar la lista 
function reiniciar() {
    amigos = []; 
    //limpiar la lista visualmente
    actualizarLista();
    //Limpiar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    return;
}

