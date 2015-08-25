define(function (require) {
  
  var $ = require('jquery');
  var Q = require('q');
  var getDeck = require("get-deck");
  var drawCard = require("draw-card");
  var deckId;
  var playerOneScore = 0;
  var playerTwoScore = 0;

//var deck = getDeck().then(getDeck());
getDeck.playerOneDeck().then(function(data) {

  var playerOneDeckId = data; 

getDeck.playerTwoDeck().then(function(data) {
  var playerTwoDeckId = data; 
console.log(playerTwoDeckId);

 //Beginning Click inside of PlayerTwo Promise
 $(".draw").click(function() { 

  var playerOneDraw = drawCard(playerOneDeckId);
  var playerTwoDraw = drawCard(playerTwoDeckId);

   playerOneDraw.then(function(data)  {
    var cardOneValue = data.cards[0].value;
    var cardImagePlayerOne = data.cards[0].image;
   
   playerTwoDraw.then(function(data)  {
    var cardTwoValue = data.cards[0].value;
    var cardImagePlayerTwo = data.cards[0].image;
    var remaining = data.remaining;

//


 //Do Win Logic 
 if(remaining > 4) {
    if(cardOneValue > cardTwoValue) {
      console.log("Player One Wins!")
      console.log("Remaining", remaining)
      playerOneScore += 1;
      console.log("Total Score" + "Player One:" + playerOneScore + " Player Two:", playerTwoScore);



    } else if(cardOneValue < cardTwoValue) {
      console.log("Player Two Wins!")
      console.log("Remaining", remaining)
       playerTwoScore += 1;
      console.log("Total Score" + "Player One:" + playerOneScore + " Player Two:", playerTwoScore);
    }
  } else if(remaining == 2) {
    //Check Score for player one and player two
  }
//End Win Logic


      });


    });



   });
//End Click


  })

console.log(playerOneDeckId);
console.log(playerTwoDeckId);
});



/*
getDeck.playerTwoDeck().then(function(data) {

var playerTwoDeckId = data; 
console.log(PlayerTwoDeckId);

    })
*/




  //Draw card -- Add button click
 


   });
