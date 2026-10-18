const plants = [
  { name: "Luz de luna", kind: "orchid", color: "#d9b7ea", center: "#f8da9c", glow: "#e7b9ff", description: "Sus pétalos guardan el brillo de la primera estrella." },
  { name: "Orquídea de fuego", kind: "orchid", color: "#f49573", center: "#ffe09b", glow: "#ffab73", description: "Solo abre sus alas cuando el horizonte se tiñe de cobre." },
  { name: "Lirio de cristal", kind: "lily", color: "#b5dce1", center: "#fff0ac", glow: "#b7f0ed", description: "Parece tallado en hielo, aunque florece bajo el sol tibio." },
  { name: "Estrella violeta", kind: "star", color: "#ad99e4", center: "#f6dc94", glow: "#c7a5ff", description: "Una constelación diminuta que encontró raíz en la tierra." },
  { name: "Campana de ámbar", kind: "bell", color: "#f3c56d", center: "#fff0ad", glow: "#ffe18a", description: "Al moverse con el viento, parece llamar a las luciérnagas." },
  { name: "Dalia aurora", kind: "puff", color: "#e68ba2", center: "#ffe8a2", glow: "#ffabc1", description: "Sus muchos pétalos mezclan los colores del amanecer." },
  { name: "Flor de niebla", kind: "lily", color: "#e4d6bd", center: "#f8e19e", glow: "#fff1c4", description: "Casi transparente; dicen que aparece después de la lluvia." },
  { name: "Copa turquesa", kind: "bell", color: "#6fc4ba", center: "#f5df9d", glow: "#8ce5d6", description: "Recoge rocío de las montañas en su pequeña copa." },
  { name: "Rosa cometa", kind: "star", color: "#f18a9d", center: "#ffe4a4", glow: "#ff9daf", description: "Sus largas puntas apuntan al lugar donde cayó una estrella." },
  { name: "Peonía de sueño", kind: "puff", color: "#c89bdb", center: "#fae0a7", glow: "#dfacfa", description: "Su aroma recuerda un sueño bonito al despertar." },
  { name: "Loto solar", kind: "lily", color: "#f2a565", center: "#fff0ab", glow: "#ffd081", description: "Se orienta siempre hacia el último rayo de luz." },
  { name: "Orquídea celeste", kind: "orchid", color: "#83aee1", center: "#ffe6a3", glow: "#9fcaff", description: "Florece en el valle y sueña con las nubes." },
  { name: "Flor de cerezo lunar", kind: "puff", color: "#efb8c0", center: "#fff0aa", glow: "#ffd0d6", description: "Una brisa basta para soltar una lluvia de pétalos." },
  { name: "Amapola estelar", kind: "star", color: "#e65f72", center: "#f8df9f", glow: "#ff869a", description: "En su centro late una luz pequeña, como un planeta lejano." },
  { name: "Iris de plata", kind: "orchid", color: "#9a9fdf", center: "#f8e29f", glow: "#b3b8ff", description: "Sus pétalos plateados cambian de tono con cada nube." },
  { name: "Campanilla marina", kind: "bell", color: "#6aa6ac", center: "#ffe4a2", glow: "#89dce0", description: "Trae consigo el recuerdo de un océano escondido." },
  { name: "Diente de león cósmico", kind: "puff", color: "#f2db91", center: "#fff2bd", glow: "#fff0aa", description: "Sus semillas parecen planetas listos para viajar." },
  { name: "Lirio de coral", kind: "lily", color: "#f18c72", center: "#ffe5a5", glow: "#ffb090", description: "Crece entre la hierba como un pequeño arrecife encendido." },
  { name: "Violeta del bosque", kind: "star", color: "#b184c9", center: "#fce39e", glow: "#d6a3ef", description: "Su perfume dulce marca el camino de vuelta a casa." },
  { name: "Rosa de los vientos", kind: "orchid", color: "#e998b8", center: "#fff0a3", glow: "#ffb4d3", description: "Cada uno de sus pétalos señala un rumbo distinto." },
  { name: "Flor de jade", kind: "bell", color: "#8cba85", center: "#f9e7a5", glow: "#b8eda2", description: "Dicen que trae buena suerte a quien la encuentra." },
  { name: "Pasiflora boreal", kind: "star", color: "#b28ddd", center: "#f7dc98", glow: "#d5aeff", description: "Sus filamentos dibujan una aurora en miniatura." },
  { name: "Loto de las nubes", kind: "lily", color: "#d1c2e9", center: "#ffebb0", glow: "#e4d7ff", description: "Ligero como una nube, descansa sobre hojas aterciopeladas." },
  { name: "Clavel de fuego fatuo", kind: "puff", color: "#e9b958", center: "#fff1bd", glow: "#ffe18c", description: "Su resplandor azul guía a los viajeros entre la niebla." },
  { name: "Azucena del valle", kind: "bell", color: "#eee7cf", center: "#fff3bd", glow: "#fff5d3", description: "Pequeña y serena: una campana blanca entre tanto color." }
];

const beds = document.querySelector("#flowerbeds");
const card = document.querySelector("#plantCard");
const meadow = document.querySelector(".meadow");
let discovered = new Set();

function makeFlower(plant, index) {
  const button = document.createElement("button");
  const column = index % 12;
  const row = Math.floor(index / 12);
  const left = 3 + column * 8.35 + (row % 2 ? 3.3 : 0) + (Math.random() * 3 - 1.5);
  const size = 22 + Math.random() * 24 + (row === 0 ? 5 : 0);
  button.type = "button";
  button.className = "flower";
  button.dataset.kind = plant.kind;
  button.style.setProperty("--left", `${Math.min(98, left)}%`);
  button.style.setProperty("--bottom", `${10 + Math.random() * 19}%`);
  button.style.setProperty("--size", `${size}px`);
  button.style.setProperty("--petal", plant.color);
  button.style.setProperty("--center", plant.center);
  button.style.setProperty("--glow", plant.glow);
  button.style.setProperty("--delay", `${Math.random() * -5}s`);
  button.style.setProperty("--sway", `${3.4 + Math.random() * 2.8}s`);
  button.setAttribute("aria-label", `Descubrir ${plant.name}`);

  const bloom = document.createElement("span");
  bloom.className = "bloom";
  bloom.setAttribute("aria-hidden", "true");
  for (let petal = 0; petal < 8; petal++) {
    const shape = document.createElement("span");
    shape.className = "petal";
    shape.style.setProperty("--angle", `${petal * 45}deg`);
    bloom.append(shape);
  }
  const core = document.createElement("span");
  core.className = "core";
  bloom.append(core);

  const stem = document.createElement("span");
  stem.className = "stem";
  const leaf = document.createElement("span");
  leaf.className = "leaf";
  const leafRight = document.createElement("span");
  leafRight.className = "leaf leaf-right";
  button.append(bloom, stem, leaf, leafRight);
  button.addEventListener("click", () => showPlant(plant, index));
  return button;
}

function showPlant(plant, index) {
  document.querySelector("#plantName").textContent = plant.name;
  document.querySelector("#plantDescription").textContent = plant.description;
  document.querySelector("#plantNumber").textContent = String(index + 1).padStart(2, "0");
  card.classList.add("visible");
  discovered.add(index);
  document.querySelector("#flowerCount").textContent = plants.length - discovered.size;
}

plants.forEach((plant, index) => beds.append(makeFlower(plant, index)));
document.querySelector("#flowerCount").textContent = plants.length;
document.querySelector("#cardClose").addEventListener("click", () => card.classList.remove("visible"));
document.querySelector("#exploreButton").addEventListener("click", () => {
  meadow.scrollIntoView({ behavior: "smooth", block: "end" });
  const firstFlower = beds.querySelector(".flower");
  window.setTimeout(() => firstFlower?.focus({ preventScroll: true }), 450);
});

// Luciérnagas repartidas sobre el valle.
const fireflies = document.querySelector("#fireflies");
for (let i = 0; i < 29; i++) {
  const light = document.createElement("span");
  light.className = "firefly";
  light.style.left = `${Math.random() * 100}%`;
  light.style.top = `${48 + Math.random() * 45}%`;
  light.style.setProperty("--duration", `${2.2 + Math.random() * 4}s`);
  light.style.setProperty("--delay", `${Math.random() * -5}s`);
  light.style.setProperty("--dx", `${Math.random() * 32 - 16}px`);
  light.style.setProperty("--dy", `${Math.random() * 28 - 14}px`);
  fireflies.append(light);
}

// Paisaje sonoro breve y opcional, sintetizado localmente sin cargar audio externo.
let audioContext;
let oscillator;
let gain;
document.querySelector("#soundButton").addEventListener("click", async (event) => {
  const button = event.currentTarget;
  const active = button.getAttribute("aria-pressed") === "true";
  if (active) {
    gain?.gain.setTargetAtTime(0, audioContext.currentTime, .3);
    button.setAttribute("aria-pressed", "false");
    button.setAttribute("aria-label", "Activar sonidos del jardín");
    button.querySelector(".sound-label").textContent = "SONIDO";
    return;
  }
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    button.querySelector(".sound-label").textContent = "NO DISPONIBLE";
    return;
  }
  audioContext ??= new AudioContextClass();
  await audioContext.resume();
  oscillator = audioContext.createOscillator();
  gain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();
  oscillator.type = "sine";
  oscillator.frequency.value = 174.61;
  filter.type = "lowpass";
  filter.frequency.value = 440;
  gain.gain.value = 0;
  oscillator.connect(filter).connect(gain).connect(audioContext.destination);
  oscillator.start();
  gain.gain.setTargetAtTime(.025, audioContext.currentTime, .8);
  button.setAttribute("aria-pressed", "true");
  button.setAttribute("aria-label", "Desactivar sonidos del jardín");
  button.querySelector(".sound-label").textContent = "ACTIVADO";
});
