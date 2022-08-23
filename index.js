function select() {
  const audio = new Audio("./data/select.mp3");
  audio.play();
}

const tabs = document.querySelectorAll(".tab");

// tabs.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     select();
//   });
// });

const presentation = document.querySelector(".title");

window.addEventListener("scroll", () => {
  if (window.scrollY > 75) {
    presentation.style.opacity = "1";
    // presentation.style.textAlign = "center";
  } else {
    presentation.style.opacity = "0";
    // presentation.style.textAlign = "left";
  }
});

const skillstitle = document.querySelector(".skillstitle");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    skillstitle.style.opacity = "1";
    // presentation.style.textAlign = "center";
  } else {
    skillstitle.style.opacity = "0";
    // presentation.style.textAlign = "left";
  }
});

const samplestitle = document.querySelector(".samplestitle");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1400) {
    samplestitle.style.opacity = "1";
    // presentation.style.textAlign = "center";
  } else {
    samplestitle.style.opacity = "0";
    // presentation.style.textAlign = "left";
  }
});

const cvtitle = document.querySelector(".cvtitle");
const cvflex = document.querySelector(".cvflex");

window.addEventListener("scroll", () => {
  if (window.scrollY > 3300) {
    cvtitle.style.opacity = "1";
    cvflex.style.opacity = "1";
    // presentation.style.textAlign = "center";
  } else {
    cvtitle.style.opacity = "0";
    cvflex.style.opacity = "0";
    // presentation.style.textAlign = "left";
  }
});

const html = document.querySelector(".html");
const css = document.querySelector(".css");
const js = document.querySelector(".js");
const frontend = document.querySelector(".frontend");

window.addEventListener("scroll", () => {
  console.log(scrollY);
  if (window.scrollY > 850) {
    frontend.style.opacity = "1";

    setTimeout(() => {
      html.style.opacity = "1";
      html.style.transform = "translateY(0%)";
    }, 600);
    setTimeout(() => {
      css.style.opacity = "1";
      css.style.transform = "translateY(25%)";
    }, 1200);
    setTimeout(() => {
      js.style.opacity = "1";
      js.style.transform = "translateY(50%)";
    }, 1800);
    setTimeout(() => {
      js.style.opacity = "1";
      js.style.transform = "translateY(50%)";
    }, 2400);
  } else {
    html.style.opacity = "0";
    html.style.transform = "translateY(-25%)";
    css.style.opacity = "0";
    css.style.transform = "translateY(0%)";
    js.style.opacity = "0";
    js.style.transform = "translateY(25%)";
    frontend.style.opacity = "0";
  }
});

// navbar

const navbar = document.querySelector(".navbar2");
const show = document.querySelector(".show");
const hide = document.querySelector(".hide");

window.addEventListener("scroll", () => {
  if (window.scrollY > 180) {
    navbar.style.left = "-265px";
  } else {
    navbar.style.left = "-320px";
  }
});

show.addEventListener("click", () => {
  navbar.style.left = "0px";

  setTimeout(() => {
    show.style.opacity = "0";
    show.style.left = "300px";
    hide.style.opacity = "1";
    hide.style.left = "276px";
  }, 200);
});
hide.addEventListener("click", () => {
  navbar.style.left = "-265px";

  setTimeout(() => {
    show.style.opacity = "1";
    show.style.left = "276px";
    hide.style.opacity = "0";
    hide.style.left = "252px";
  }, 200);
});
