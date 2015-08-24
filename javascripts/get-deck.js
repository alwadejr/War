define(function (require) {

  var $ = require("jquery");
  var Q = require("q");


    return function () {
    var deferred = Q.defer();
     
      $.ajax({
        url:"http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
        method: "GET"
      }).done(function(deck_data) {
        deferred.resolve(deck_data);
        console.log(deck_data.deck_id);
      })
       .fail(function(xhr, status, error) {
        deferred.reject(error);
      });

    
    return deferred.promise;

     };
  });
