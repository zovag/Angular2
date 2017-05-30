'use strict';
(function(){
    
    let model = function() {

        let filmURL = "http://www.omdbapi.com/?apikey=520bbe17&page=1&s=",
            filmName = "Matrix";
        
        function getFilms() {
            return $.get( filmURL + filmName, function( films ) {});            
        }
               
        function updateFilms(searchFilm) {
            filmName = searchFilm;
            return getFilms(searchFilm);            
        }
        
        return {
            getFilms : getFilms,
            updateFilms: updateFilms
        }
    }
    window.app = window.app || {};
    window.app.model = model();    
}())