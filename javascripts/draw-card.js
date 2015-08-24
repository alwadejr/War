define(function (require) {

  var $ = require("jquery");
  var Q = require("q");


    return function (deckId) {
    var deferred = Q.defer();
     
      $.ajax({
        url:"http://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=1",
        method: "GET"
      }).done(function(card_data) {
        deferred.resolve(card_data);
        console.log(card_data);
    })
    .   fail(function(xhr, status, error) {
        deferred.reject(error);
    });

    
    return deferred.promise;

     };
  });
