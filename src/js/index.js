const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {    
    elementoPlataformas.classList.toggle("ativo")
} )
const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");
if(botaoEstaAberto) {
    elementoPlataformas.classList.remove("ativo");
}else{
    elementoPlataformas.classList.add("ativo");
}
const bComprar = document.querySelector(".princip");
bComprar.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const smooth = document.querySelectorAll(".smooth");
    smooth.forEach(function(elem) {
        elem.addEventListener('click', function() {
            document.getElementById('compre-titulo').scrollIntoView({ behavior:'smooth'});
        })
    })
})


const lanca = document.querySelector(".coming");
lanca.addEventListener('click', () => {
    document.getElementById('em-breve').scrollIntoView({behavior: 'smooth'});
});