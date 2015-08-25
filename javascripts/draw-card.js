define(function (require) {

  var $ = require("jquery");
  var Q = require("q");


    return function (data) {
    var deferred = Q.defer();
     
      $.ajax({
        url:"http://deckofcardsapi.com/api/deck/" + data + "/draw/?count=1",
        method: "GET"
      }).done(function(card_data) {
        if (card_data.cards[0].value === "KING") {
            card_data.cards[0].value = "13";
        } else if (card_data.cards[0].value === "QUEEN"){
            card_data.cards[0].value = "12";
        } else if (card_data.cards[0].value === "JACK"){
            card_data.cards[0].value = "11";
        } else if (card_data.cards[0].value === "ACE"){
            card_data.cards[0].value = "14";
        }

        deferred.resolve(card_data);
    })
    .   fail(function(xhr, status, error) {
        deferred.reject(error);
    });

    
    return deferred.promise;

     };
  });
