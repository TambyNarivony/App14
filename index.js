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
  choiceForm.style.display = "block";
};

/* Logique bouton NO */
let i = 0;
const texts = ["Are you sure?", "Are you really sure?", "Really"];
const noSizes = [0.9, 0.75, 0.6];
const yesSizes = [1.2, 1.4, 1.6];

noBtn.onclick = () => {
  if (i < texts.length) {
    noBtn.textContent = texts[i];
    noBtn.style.transform = `scale(${noSizes[i]})`;
    yesBtn.style.transform = `scale(${yesSizes[i]})`;
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
