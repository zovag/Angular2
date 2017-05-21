'use strict';
(function(){
    
    let model = function() {

        let eventHolder = $({}),
            filmRespEventName = "filmResponse",
            filmsUrl = "http://www.omdbapi.com/?page=1&s=",
            apiKey = "&apikey=520bbe17";

        function getFilms(filmName) {
            $.get( filmsUrl + filmName + apiKey, function(films) {
                if(!films){return};
                eventHolder.trigger(filmRespEventName , [films]);
            });
        }
        
        return {
            getFilms : getFilms,
            eventHolder : eventHolder,
            filmRespEventName : filmRespEventName
        }
    }
    
    window.app = window.app || {};
    window.app.model = model();
  
}())