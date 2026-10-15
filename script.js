/* =========================================================
   CONFIGURAÇÃO DO CLIPE
   Quando o clipe estiver pronto, escolha UMA das opções:

   1) YouTube: cole o link do vídeo abaixo, por exemplo:
      const LINK_DO_CLIPE = "https://www.youtube.com/watch?v=XXXXXXXXXXX";

   2) Arquivo no computador: coloque o vídeo na pasta "video"
      com o nome "clipe.mp4" e escreva:
      const LINK_DO_CLIPE = "video/clipe.mp4";

   Enquanto estiver vazio (""), aparece o aviso "Em breve".
   ========================================================= */
const LINK_DO_CLIPE = "";


/* ===== Coloca o clipe na página ===== */
function pegarIdYoutube(link) {
  const padrao = /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/;
  const achou = link.match(padrao);
  return achou ? achou[1] : null;
}

function montarVideo() {
  const caixa = document.getElementById("videoBox");
  const link = LINK_DO_CLIPE.trim();

  if (link === "") {
    caixa.innerHTML = `
      <div class="sem-video">
        <strong>Clipe em breve!</strong>
        <p>O clipe da música “É” do Grupo 3 vai aparecer aqui.</p>
      </div>`;
    return;
  }

  const idYoutube = pegarIdYoutube(link);

  if (idYoutube) {
    caixa.innerHTML = `
      <iframe src="https://www.youtube.com/embed/${idYoutube}"
        title="Clipe da música É - Grupo 3"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>`;
  } else {
    caixa.innerHTML = `<video src="${link}" controls playsinline></video>`;
  }
}


/* ===== Foto do museu: se não achar o arquivo, mostra aviso ===== */
function verificarFoto() {
  const foto = document.getElementById("fotoMuseu");

  foto.addEventListener("error", () => {
    const aviso = document.createElement("div");
    aviso.className = "foto-falta";
    aviso.textContent = "Coloque a foto do museu na pasta img com o nome museu.jpg";
    foto.replaceWith(aviso);
  });
}


/* ===== Menu no celular ===== */
function configurarMenu() {
  const botao = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");

  botao.addEventListener("click", () => {
    menu.classList.toggle("aberto");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => menu.classList.remove("aberto"));
  });
}


/* ===== Botão de voltar ao topo ===== */
function configurarBotaoTopo() {
  const botao = document.getElementById("topoBtn");

  window.addEventListener("scroll", () => {
    botao.classList.toggle("visivel", window.scrollY > 500);
  });

  botao.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


/* ===== Números que contam (1996, 16 m, 817 m²) ===== */
function animarContador(elemento) {
  const alvo = Number(elemento.dataset.alvo);
  const duracao = 1500;
  const inicio = performance.now();

  function passo(agora) {
    const progresso = Math.min((agora - inicio) / duracao, 1);
    elemento.textContent = Math.floor(progresso * alvo);
    if (progresso < 1) requestAnimationFrame(passo);
    else elemento.textContent = alvo;
  }

  requestAnimationFrame(passo);
}


/* ===== Seções aparecem ao rolar a página ===== */
function configurarAnimacoes() {
  const blocos = document.querySelectorAll(".secao > *");
  const contadores = document.querySelectorAll(".contador");

  if (!("IntersectionObserver" in window)) {
    contadores.forEach((c) => (c.textContent = c.dataset.alvo));
    return;
  }

  blocos.forEach((bloco) => bloco.classList.add("aparecer"));

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;

      const alvo = entrada.target;
      if (alvo.classList.contains("contador")) {
        animarContador(alvo);
      } else {
        alvo.classList.add("mostrar");
      }
      observador.unobserve(alvo);
    });
  }, { threshold: 0.15 });

  blocos.forEach((bloco) => observador.observe(bloco));
  contadores.forEach((c) => observador.observe(c));
}


/* ===== Liga tudo ===== */
document.addEventListener("DOMContentLoaded", () => {
  montarVideo();
  verificarFoto();
  configurarMenu();
  configurarBotaoTopo();
  configurarAnimacoes();
  document.querySelector(".mac-svg").classList.add("flutua");
});
