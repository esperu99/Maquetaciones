
// const divenlaces = document.getElementById("enlaces"); // Selecciona la ubicación donde se crearan los enlaces

// Bucle que hace 55 iteraciones

//     let link = document.createElement("a"); // Creará el elemento <a>

//   link.href = `/Pagina${i}/index.html`; // Crea la ruta para el href

//     link.textContent = `Ir a Página ${i}`; // El texto del enlace

//     link.appendChild(document.createElement("br")); // El salto de línea 

//    divenlaces.appendChild(link); // Agrega los enlaces creados    
for (let i = 1; i < 21; i++) {
    const enlaceclass = document.getElementsByClassName("parte1");

    let link = document.createElement("a"); // Creará el elemento <a>

    link.href = `/Pagina${i}/index.html`; // Crear ruta enlace

    link.textContent = `Ir a Página ${i}`; // Texto enlace

    for (let j = 0; j < enlaceclass.length; j++) {
        enlaceclass[j].appendChild(link);

        link.appendChild(document.createElement("br"));
    }
}
for (let i = 21; i < 41; i++) {

    const enlaceclass = document.getElementsByClassName("parte2");

    let link = document.createElement("a"); // Creará el elemento <a>

    link.href = `/Pagina${i}/index.html`; // Crear ruta enlace

    link.textContent = `Ir a Página ${i}`; // Texto enlace

    for (let j = 0; j < enlaceclass.length; j++) {
        enlaceclass[j].appendChild(link);

        link.appendChild(document.createElement("br"));
    }
}
for (i = 41; i < 56; i++) {
    const enlaceclass = document.getElementsByClassName("parte3");

    let link = document.createElement("a"); // Creará el elemento <a>

    link.href = `/Pagina${i}/index.html`; // Crear ruta enlace

    link.textContent = `Ir a Página ${i}`; // Texto enlace

    for (let j = 0; j < enlaceclass.length; j++) {
        enlaceclass[j].appendChild(link);
        link.appendChild(document.createElement("br"));
    }
}



