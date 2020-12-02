var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;

var img1 = "images/dice"+ randomNumber1 +".png";
var img2 = "images/dice"+ randomNumber2 +".png";

var state = history.state || {};
var reloadCount = state.reloadCount || 0;

if (performance.navigation.type === 1) { // Reload

  state.reloadCount = ++reloadCount;

  history.replaceState(state, null, document.URL);

} else if (reloadCount) {

  delete state.reloadCount;

  reloadCount = 0;

  history.replaceState(state, null, document.URL);

}

if (reloadCount > 0) {

  document.querySelector(".img1").setAttribute("src",img1);
  document.querySelector(".img2").setAttribute("src",img2);


  if(randomNumber1 > randomNumber2){

    document.querySelector("h1").innerHTML = "Player 1 Wins"



  }

  if(randomNumber1 < randomNumber2){

    document.querySelector("h1").innerHTML = "Player 2 Wins"



  }
  if(randomNumber1 === randomNumber2){

    document.querySelector("h1").innerHTML = "Draw"



  }


}
