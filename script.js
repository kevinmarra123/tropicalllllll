// coloca aqui o link do clipe no youtube quando ficar pronto
// exemplo: var linkClipe = "https://www.youtube.com/embed/CODIGO_DO_VIDEO";
var linkClipe = "";

var clipe = document.getElementById("clipe");

if (linkClipe == "") {
    clipe.innerHTML = "<p>O clipe vai ser colocado aqui em breve.</p>";
} else {
    clipe.innerHTML = '<iframe src="' + linkClipe + '" allowfullscreen></iframe>';
}

// se a foto nao carregar aparece um aviso
var foto = document.getElementById("foto");

foto.onerror = function () {
    foto.alt = "Foto do museu ainda não foi colocada";
};
