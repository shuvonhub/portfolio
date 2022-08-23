const bubbleMaker = () => {
  const bubble = document.createElement("span"); //creation d'un span
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1; //Terner
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  const score = document.querySelector(".score");
  const body = document.querySelector("body");
  bubble.addEventListener("click", () => {
    // bubble.remove();
    bubble.style.height = 0 + "px";
    bubble.style.width = 0 + "px";
    score.textContent++;
    if (score.textContent >= 2) {
      score.style.color = "yellow";
    }
    if (score.textContent >= 4) {
      score.style.color = "orange";
    }
    if (score.textContent >= 6) {
      score.style.color = "red";
    }
    if (score.textContent >= 8) {
      body.style.background = "green";
    }
  });

  setTimeout(() => {
    bubble.remove();
  }, 15000);
};

let interval = setInterval(bubbleMaker, 500);

console.log(Math.random()); //chiffre aleatoire entre  0 et 1
