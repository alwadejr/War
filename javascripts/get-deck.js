define(function (require) {

  var $ = require("jquery");
  var Q = require("q");


    return {
     playerOneDeck: function() {
      var deferred = Q.defer();
        $.ajax({
        url:"http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
        method: "GET"
      }).done(function(deck_data) {
        deferred.resolve(deck_data.deck_id);
      })
       .fail(function(xhr, status, error) {
        deferred.reject(error);
      });

    return deferred.promise;

    },

     playerTwoDeck: function() {
       var deferred = Q.defer();  
        $.ajax({
          url:"http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
          method: "GET"
        }).done(function(deck_data) {
          deferred.resolve(deck_data.deck_id);
        })
         .fail(function(xhr, status, error) {
          deferred.reject(error);
        });

    return deferred.promise;
     }
   }

  });
