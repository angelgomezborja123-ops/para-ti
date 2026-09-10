document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("modoBtn"),
    cards = document.querySelectorAll(".tarjeta");
  btn.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
    btn.textContent = document.body.classList.contains("oscuro")
      ? "☀️ Modo claro"
      : "🌙 Modo oscuro";
  });
  function ver() {
    cards.forEach((c) => {
      if (c.getBoundingClientRect().top < innerHeight - 80)
        c.classList.add("visible");
    });
  }
  addEventListener("scroll", ver);
  ver();
  setInterval(crearCorazon, 1800);
});
function mostrarMensaje() {
  alert(
    "💗 Gracias por ser una persona tan especial. Nunca olvides lo mucho que vales. 💗",
  );
  lanzarCorazones();
}
function crearCorazon() {
  const c = document.createElement("div");
  c.className = "corazon";
  c.textContent = ["💗", "💖", "💕", "💓", "💞", "✨", "🌸"][
    Math.floor(Math.random() * 7)
  ];
  c.style.left = Math.random() * 100 + "vw";
  c.style.bottom = "-30px";
  document.body.appendChild(c);
  setTimeout(() => c.remove(), 4000);
}
function lanzarCorazones() {
  for (let i = 0; i < 25; i++) setTimeout(crearCorazon, i * 80);
}
