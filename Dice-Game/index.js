function rollDice() {
  var randomPickPlayer1 = Math.floor(Math.random() * 6) + 1;
  var randomPickPlayer2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").setAttribute("src", `./images/dice${randomPickPlayer1}.png`);
  document.querySelector(".img2").setAttribute("src", `./images/dice${randomPickPlayer2}.png`);

  var resultText = "Draw";
  if (randomPickPlayer1 > randomPickPlayer2) {
    resultText = "Player 1 Wins";
  } else if (randomPickPlayer1 < randomPickPlayer2) {
    resultText = "Player 2 Wins";
  }

  document.querySelector("h1").innerHTML = resultText;
}
