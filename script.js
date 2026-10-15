// coloca aqui o link do clipe no youtube quando ficar pronto
// exemplo: var linkClipe = "https://www.youtube.com/embed/CODIGO_DO_VIDEO";
var linkClipe = "";

var video = document.getElementById("video");

if (linkClipe == "") {
    video.innerHTML = '<div class="aviso">O clipe vai ser colocado aqui em breve!</div>';
} else {
    video.innerHTML = '<iframe src="' + linkClipe + '" allowfullscreen></iframe>';
}


// se a foto nao carregar aparece um aviso
var foto = document.getElementById("foto");

foto.onerror = function () {
    foto.alt = "Foto do museu ainda não foi colocada";
};


// botao de curiosidades
var curiosidades = [
    "O museu foi construído em cima de um mirante de pedra, de frente para a Baía de Guanabara.",
    "O espelho d'água em volta do prédio tem mais de 800 m².",
    "Niemeyer dizia que o museu nasce da pedra como se fosse uma flor.",
    "A cúpula tem cerca de 50 metros de diâmetro e fica apoiada numa base só no meio.",
    "O acervo principal do museu é a Coleção João Sattamini, de arte contemporânea brasileira."
];

var numero = 0;
var botao = document.getElementById("botaoCuriosidade");
var texto = document.getElementById("curiosidade");

botao.onclick = function () {
    texto.innerHTML = curiosidades[numero];
    numero = numero + 1;

    if (numero == curiosidades.length) {
        numero = 0;
    }

    botao.innerHTML = "Próxima curiosidade";
};
