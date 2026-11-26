// caminho do clipe que fica na pasta video
var linkClipe = "video/clipe.mp4";

var video = document.getElementById("video");

// coloca o video dentro da div com controles de play, pause e volume
video.innerHTML = '<video src="' + linkClipe + '" controls></video>';
