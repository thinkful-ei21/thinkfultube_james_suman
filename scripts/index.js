'use strict';
/* global VideoList */
// When DOM is ready:
$(document).ready(function () {
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM   
  $(document).ready(function(){
    VideoList.bindEventListeners();
    VideoList.render();
  });
});


