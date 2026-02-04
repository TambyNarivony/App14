const startBtn = document.getElementById("startBtn");
const usernameInput = document.getElementById("username");
const nameSection = document.getElementById("nameSection");
const choiceForm = document.getElementById("choiceForm");
const hiddenName = document.getElementById("hiddenName");

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

/* Afficher les boutons après le nom */
startBtn.onclick = () => {
  const name = usernameInput.value.trim();
  if (!name) return;

  hiddenName.value = name;
  nameSection.style.display = "none";
  choiceForm.style.display = "flex"; // Flex pour responsive mobile
};

/* Logique bouton NO avec font-size et padding dynamiques */
let i = 0;
const texts = ["Are you sure?", "Are you really sure?", "Really"];

// Nouvelle approche pour mobile : font-size et padding en unités relatives
const noStyles = [
  { font: "4vw", padding: "2vw 5vw" },
  { font: "3.5vw", padding: "1.5vw 4vw" },
  { font: "3vw", padding: "1vw 3vw" }
];

const yesStyles = [
  { font: "4vw", padding: "2vw 5vw" },
  { font: "4.5vw", padding: "2.5vw 6vw" },
  { font: "5vw", padding: "3vw 7vw" }
];

noBtn.onclick = () => {
  if (i < texts.length) {
    noBtn.textContent = texts[i];

    // Appliquer le style mobile-friendly
    noBtn.style.fontSize = noStyles[i].font;
    noBtn.style.padding = noStyles[i].padding;

    yesBtn.style.fontSize = yesStyles[i].font;
    yesBtn.style.padding = yesStyles[i].padding;

    i++;
  } else {
    noBtn.style.display = "none";
  }
};

/* FORM SUBMIT → Formspree + confetti */
choiceForm.addEventListener("submit", () => {
  yesBtn.disabled = true;
  yesBtn.textContent = "Accepted 💖";

  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
});
