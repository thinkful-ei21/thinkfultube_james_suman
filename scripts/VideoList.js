/* global store, Api */

'use strict';

const VideoList = (function(){
    const generateListItem = function(video) {
        return `<li id='${video.id}'>
                    <h3>${video.title}</h3>
                    <img src='${video.thumbnail}'>
                </li>`;
    };

    const render = function(){
        const generatedHtml = store.videos.map(video => generateListItem(video));
        $('#results').html(generatedHtml);
    };

    const handleSubmit = function(){
        $('#youTubeForm').on('submit', function(event) {
            event.preventDefault();
            const search = $('#search-term').val();
            Api.fetchVideos(search, (response) => { 
                const decoratedResponse = decorateResponse(response); 
            });
        });
    };

    return {
        render,
    };
}());