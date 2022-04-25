console.log("Cześć!");

let italiaButton = document.querySelector(".js-italiaButton");
let italiaImage = document.querySelector(".js-italiaImage");
let goodLuckButton = document.querySelector(".js-goodLuckButton");
let goodLuckImage = document.querySelector(".js-goodLuckImage");

italiaButton.addEventListener("click", () => {
  switch (italiaButton.innerText) {
    case "Pokaż pizzę!":
      italiaButton.innerText = "Pokaż kawę!";
      italiaImage.src = "https://i.pinimg.com/474x/f1/fd/d7/f1fdd7a4d69110f8aa9a1643dae3f509.jpg";
      italiaImage.alt = "stół z zastawą, pizzą i winem";
      break
    case "Pokaż kawę!":
      italiaButton.innerText = "Pokaż Koloseum!";
      italiaImage.src = "https://thumbs.dreamstime.com/b/tazza-di-caff%C3%A8-con-il-moka-italiano-28188410.jpg";
      italiaImage.alt = "filiżanka z kawą i kawiarka";
      break
    case "Pokaż Koloseum!":
      italiaButton.innerText = "Pokaż pizzę!";
      italiaImage.src = "https://lp-cms-production.imgix.net/2021-06/The_Colosseum_Rome.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850";
      italiaImage.alt = "Koloseum w Rzymie";
  }
});

goodLuckButton.addEventListener("click", () => {
  goodLuckImage.classList.toggle("section__image--disappear");
  goodLuckButton.innerText = goodLuckImage.classList.contains("section__image--disappear") ? "Click to wish me luck!" : "Dzięki!";
});