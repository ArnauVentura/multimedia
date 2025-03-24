const coloresPlanetas = ["blue", "red", "green", "purple", "orange"];

//Loop para crear las estrellas en posiciones aleatorias y con duracion de animacion aleatoria
function crearEstrellas() {
  for (let i = 0; i < 100; i++) {
    let estrella = document.createElement("div");
    estrella.classList.add("estrella");
    estrella.style.top = `${Math.random() * 100}vh`;
    estrella.style.left = `${Math.random() * 100}vw`;
    estrella.style.animationDuration = `${Math.random() * 5 + 5}s`;
    document.body.appendChild(estrella);
  }
}
crearEstrellas();

//Funcion para crear los planetas en la posicion del click o touch
function crearPlaneta(x, y) {
  let audio = document.getElementById("audio");
  audio.currentTime = 0;
  audio.play();

  let planeta = document.createElement("div");
  planeta.classList.add("planeta");
  planeta.style.left = `${x - 20}px`;
  planeta.style.top = `${y - 20}px`;
  planeta.style.background =
    coloresPlanetas[Math.floor(Math.random() * coloresPlanetas.length)];
  document.body.appendChild(planeta);
  setTimeout(() => planeta.remove(), 3000);
}

//Event listeners para detectar click o touch
document.body.addEventListener("touchstart", (e) => {
  let touch = e.touches[0];
  crearPlaneta(touch.clientX, touch.clientY);
});

document.body.addEventListener("click", (e) => {
  crearPlaneta(e.clientX, e.clientY);
});
