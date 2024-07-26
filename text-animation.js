
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    for(let i = 0; i < textoArray.length; i++) {
    setTimeout(() => elemento.innerHTML += textoArray[i], 95 * i);
    }
}

const titulo = document.querySelector('.boas-vindas');
typeWriter(titulo);

window.sr = ScrollReveal({reset: true});

sr.reveal('#inicio', {duration:2500});

sr.reveal('.hab-header', {
    rotate: {x: 0, y: 50, z: 0},
    duration: 2000
});

sr.reveal('.hab-box', {duration: 2000});

sr.reveal('#projetos', {
    rotate: {x: 0, y: 50, z: 0},
    duration: 2000
});

sr.reveal('#contato', {
    rotate: {x: 0, y: 50, z: 0},
    duration: 2000
});
