// coloca aqui o link do clipe no youtube quando ficar pronto
// exemplo: var linkClipe = "https://www.youtube.com/embed/CODIGO_DO_VIDEO";
var linkClipe = "";

var video = document.getElementById("video");

if (linkClipe == "") {
    video.innerHTML = '<div class="aviso">O clipe vai ser colocado aqui em breve!</div>';
} else {
    video.innerHTML = '<iframe src="' + linkClipe + '" allowfullscreen></iframe>';
}
