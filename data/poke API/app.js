let button = document.getElementById("button");
let image = document.getElementById("image");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name");

const changePokemon = async () => {
  //async permet de dire que la fonction est asynchrone càd que chaque ligne de la fonction ne dure pas forcément le même temps
  let randomNumber = Math.ceil(Math.random() * 150) + 1; // math random = nombre aléatoir [0 - 1[ - math ceil permet d'arrondir au nombre supérieur
  console.log(randomNumber);

  let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

  let data = await fetch(requestString); // await = attendre que la réponse(fetch) arrive avant de passer à la suite
  console.log(data);

  let response = await data.json();
  console.log(response);

  image.src = response.sprites.front_default;
  pokeNumber.textContent = "#" + response.id;
  pokeName.textContent = response.name;
};

changePokemon();
button.addEventListener("click", changePokemon);
