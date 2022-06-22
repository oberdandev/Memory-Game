const getH1 = document.querySelector("h1");

console.log(getH1.textContent);

const playerName = document.querySelector("#playerName");
const buttonPlay = document.querySelector("#playGame");

playerName.focus();

const savePlayerName = () => {};

buttonPlay.addEventListener("click", () => {
  console.log("Clicou", playerName.value);
  localStorage.setItem("playerName", playerName.value);
  window.location.href = "/pages/game.html";
  console.log(localStorage.getItem("playerName"));
});
