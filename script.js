const plants = [
  { name: "Luz de luna", kind: "orchid", color: "#d9b7ea", center: "#f8da9c", glow: "#e7b9ff", poem: "La noche deja en cada pétalo\nun pedacito de su luz." },
  { name: "Orquídea de fuego", kind: "orchid", color: "#f49573", center: "#ffe09b", glow: "#ffab73", poem: "Arde el cielo en cobre,\ny tú enciendes el jardín." },
  { name: "Lirio de cristal", kind: "lily", color: "#b5dce1", center: "#fff0ac", glow: "#b7f0ed", poem: "Agua quieta hecha flor,\nrocío que aprendió a soñar." },
  { name: "Estrella violeta", kind: "star", color: "#ad99e4", center: "#f6dc94", glow: "#c7a5ff", poem: "Del cielo bajó una estrella\ny echó raíces al pasar." },
  { name: "Campana de ámbar", kind: "bell", color: "#f3c56d", center: "#fff0ad", glow: "#ffe18a", poem: "Suena el viento entre tus hojas,\nla tarde empieza a bailar." },
  { name: "Dalia aurora", kind: "puff", color: "#e68ba2", center: "#ffe8a2", glow: "#ffabc1", poem: "En tus pétalos despierta\nla mañana en mil colores." },
  { name: "Flor de niebla", kind: "lily", color: "#e4d6bd", center: "#f8e19e", glow: "#fff1c4", poem: "Llegas leve, casi sueño,\ny te quedas en la lluvia." },
  { name: "Copa turquesa", kind: "bell", color: "#6fc4ba", center: "#f5df9d", glow: "#8ce5d6", poem: "Bebes gotas de las nubes,\nguardas mares diminutos." },
  { name: "Rosa cometa", kind: "star", color: "#f18a9d", center: "#ffe4a4", glow: "#ff9daf", poem: "Tu perfume cruza el cielo\ntras la estrella que se fue." },
  { name: "Peonía de sueño", kind: "puff", color: "#c89bdb", center: "#fae0a7", glow: "#dfacfa", poem: "Quien se duerme junto a ti\nse despierta entre jardines." },
  { name: "Loto solar", kind: "lily", color: "#f2a565", center: "#fff0ab", glow: "#ffd081", poem: "Cuando el sol se va despacio,\nguardas oro entre tus hojas." },
  { name: "Orquídea celeste", kind: "orchid", color: "#83aee1", center: "#ffe6a3", glow: "#9fcaff", poem: "Sueñas alto, flor del valle,\ny las nubes sueñan contigo." },
  { name: "Flor de cerezo lunar", kind: "puff", color: "#efb8c0", center: "#fff0aa", glow: "#ffd0d6", poem: "Pétalo que el aire lleva,\nbesito de primavera." },
  { name: "Amapola estelar", kind: "star", color: "#e65f72", center: "#f8df9f", glow: "#ff869a", poem: "En tu centro hay otro mundo,\npequeñito y encendido." },
  { name: "Iris de plata", kind: "orchid", color: "#9a9fdf", center: "#f8e29f", glow: "#b3b8ff", poem: "La nube cambia de forma,\ntú de plata y de silencio." },
  { name: "Campanilla marina", kind: "bell", color: "#6aa6ac", center: "#ffe4a2", glow: "#89dce0", poem: "Suena en ti la mar lejana,\naunque crezcas en la hierba." },
  { name: "Diente de león cósmico", kind: "puff", color: "#f2db91", center: "#fff2bd", glow: "#fff0aa", poem: "Sopla el viento: cien planetas\nse van buscando su cielo." },
  { name: "Lirio de coral", kind: "lily", color: "#f18c72", center: "#ffe5a5", glow: "#ffb090", poem: "Arrecife entre la hierba,\nsol pequeño de la tierra." },
  { name: "Violeta del bosque", kind: "star", color: "#b184c9", center: "#fce39e", glow: "#d6a3ef", poem: "Tu perfume es un camino\nque me vuelve a casa." },
  { name: "Rosa de los vientos", kind: "orchid", color: "#e998b8", center: "#fff0a3", glow: "#ffb4d3", poem: "Cada pétalo señala\nun lugar para empezar." },
  { name: "Flor de jade", kind: "bell", color: "#8cba85", center: "#f9e7a5", glow: "#b8eda2", poem: "Verde calma, luz serena,\nbuena suerte en tu jardín." },
  { name: "Pasiflora boreal", kind: "star", color: "#b28ddd", center: "#f7dc98", glow: "#d5aeff", poem: "Una aurora se ha dormido\nen el centro de tu flor." },
  { name: "Loto de las nubes", kind: "lily", color: "#d1c2e9", center: "#ffebb0", glow: "#e4d7ff", poem: "Flotas sobre el pasto quieto,\ncomo nube que echa raíces." },
  { name: "Clavel de fuego fatuo", kind: "puff", color: "#e9b958", center: "#fff1bd", glow: "#ffe18c", poem: "Luz viajera en la neblina,\nno me dejes de alumbrar." },
  { name: "Azucena del valle", kind: "bell", color: "#eee7cf", center: "#fff3bd", glow: "#fff5d3", poem: "Pequeñita y blanca estrella,\ntu silencio huele a paz." }
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
  document.querySelector("#plantPoem").textContent = plant.poem;
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
