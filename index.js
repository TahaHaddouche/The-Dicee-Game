function RollDices()
{
  var diceN1=Math.round((6*Math.random())+0.5),diceN2=Math.round((6*Math.random())+0.5);
  document.querySelector(".img1").setAttribute("src","pics/dice"+diceN1+".png");
  document.querySelector(".img2").setAttribute("src","pics/dice"+diceN2+".png");
  document.querySelector("#dices").style.marginBottom="0";
  document.querySelector("#aftermatch").innerHTML="<div class='replaybtn'><a class='replay' onclick='RollDices()' type='button'><i class='fa-solid fa-rotate-right'></i> Reroll</a></div>";
  if(diceN1>diceN2)
  {
    document.querySelector("h1").innerHTML="Player 1 won!";
    document.querySelector(".playertxt1").innerHTML="Player 1 &nbsp;<i class='fa-brands fa-font-awesome flag'></i>";
    document.querySelector(".playertxt2").innerHTML="Player 2";
    document.querySelector(".playertxt1").style.color="#EEE";
    document.querySelector(".playertxt2").style.color="#4ECCA3";
  }
  else if(diceN2>diceN1)
  {
    document.querySelector("h1").innerHTML="Player 2 Won!";
    document.querySelector(".playertxt1").innerHTML="Player 1";
    document.querySelector(".playertxt2").innerHTML="Player 2 &nbsp;<i class='fa-brands fa-font-awesome flag'></i>";
    document.querySelector(".playertxt1").style.color="#4ECCA3";
    document.querySelector(".playertxt2").style.color="#EEE";
  }
  else
  {
    document.querySelector("h1").innerHTML="Draw!";
    document.querySelector(".playertxt1").innerHTML="Player 1";
    document.querySelector(".playertxt2").innerHTML="Player 2";
    document.querySelector(".playertxt1").style.color="#4ECCA3";
    document.querySelector(".playertxt2").style.color="#4ECCA3";
  }
}
