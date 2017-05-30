'use strict';
(function() {
    
    let view = function () {        
        
        let DOMElements = {
                result: document.querySelector(".result"),
                pageInput: document.querySelector(".page-input")
            },
            eventHolder = $({}),
            searchEventName = "search";
    
        function initListeners() {
            DOMElements.pageInput.addEventListener("keyup", (event) => {
                let newFilm = event.target.closest(".search-film");
                if(newFilm && event.keyCode === 13){
                    eventHolder.trigger(searchEventName, [searchElement(newFilm)]);
                }
            })
        }

        function searchElement(elem) {
            let film = elem.getElementByTagName("input")[0];
            return film.value;
        }

        function buildFilmList(films) {
            let list = films.Search.reduce(function(finslList, item) {
                return finalList + `<div class="col-xs-6">\
                                        <img src="${item.Poster}">\
                                        <div class="info-wrapper">\
                                            <div class="text-muted">${item.Title}</div>\
                                            <div class="text-muted">${item.Year}</div>\
                                        </div>
                                    </div>`;
            }, " ");
            DOMElements.result.innerHTML = list;
        }
        
        return {
            eventHolder: eventHolder,
            searchEventName: searchEventName,
            init: function(films) {
                buildFilmList(films);
                initListeners();
            }
        }
    };

    window.app = window.app || {};
    window.app.view = view();
    
}());