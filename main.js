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

function crearPlaneta(x, y) {
    document.getElementById("audio").play();
    let planeta = document.createElement("div");
    planeta.classList.add("planeta");
    planeta.style.left = `${x - 20}px`;
    planeta.style.top = `${y - 20}px`;
    document.body.appendChild(planeta);
    setTimeout(() => planeta.remove(), 3000);
}

document.body.addEventListener("touchstart", (e) => {
    let touch = e.touches[0];
    crearPlaneta(touch.clientX, touch.clientY);
});

document.body.addEventListener("click", (e) => {
    crearPlaneta(e.clientX, e.clientY);
});