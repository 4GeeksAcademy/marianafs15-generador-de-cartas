/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let card = document.querySelector(".card");
  let num = document.querySelector(".number");
  let suits = ["hearts", "diamonds", "spades", "clubs"];
  let ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  function getRandInt(array) {
    return Math.floor(Math.random() * array.length);
  }
  card.classList.add(suits[getRandInt(suits)]);
  num.innerHTML = ranks[getRandInt(ranks)];
};
