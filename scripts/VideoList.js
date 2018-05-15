'use strict';
/* global store, Api */

const VideoList = (function(){
  const generateListItem = function(video) {
    return `<li id='${video.id}'>
                    <h3>${video.title}</h3>
                    <img src='${video.thumbnail}'>
                </li>`;
  };

  const decorateResponse = function(response){
    return response.items.map(item => {
      return {
        id: `${item.id.videoId}`,
        title: `${item.snippet.title}`,
        thumbnail: `${item.snippet.thumbnails.default.url}`,
      };
    });
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
        store.setVideos(decoratedResponse);
        render();
      });
    });
  };
 
 function bindEventListeners(){
    handleSubmit();
  }

  return {
    render,
    bindEventListeners,
  };
}());