
'use strict';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

const Api = (function(){
    const fetchVideos = function(searchTerm, callback){
        const query = {
            part: 'snippet',
            key: 'AIzaSyCqu7JqABYdWI2X1yhIAEwvCM5MNGtFw0g',
            q: searchTerm
        };
        $.getJSON(BASE_URL, query, callback);
    };

    return {
        fetchVideos,
    };
}());