'use strict';

const mockData = {
  'kind': 'youtube#searchListResponse',
  'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/pdQ_uAQu_91ReMZpZU_YcmnycPg"',
  'nextPageToken': 'CAUQAA',
  'regionCode': 'US',
  'pageInfo': {
    'totalResults': 1000000,
    'resultsPerPage': 5
  },
  'items': [
    {
      'kind': 'youtube#searchResult',
      'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/dkVsFonSTHSsVgcan59qRr-UCko"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'NwlwJjelgzs'
      },
      'snippet': {
        'publishedAt': '2018-03-30T11:30:00.000Z',
        'channelId': 'UCKy3MG7_If9KlVuvw3rPMfw',
        'title': 'Get ready for LAUGHING SUPER HARD - Best FUNNY DOG videos',
        'description': 'Dogs and puppies are super funny and hilarious, they make us laugh all the time! The hardest TRY NOT TO LAUGH challenge in the World! Just look how all ...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/NwlwJjelgzs/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/NwlwJjelgzs/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/NwlwJjelgzs/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'Tiger Productions',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/-HKwERN1Sudb4KGwpxvK76iZ9GE"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'aEzZLXBH3rU'
      },
      'snippet': {
        'publishedAt': '2017-07-08T17:22:26.000Z',
        'channelId': 'UCrBYTP-sa4dtOjMWEBfR_Ng',
        'title': '*Try Not To Laugh Challenge* Funny Dogs Compilation - Funniest Dog Videos 2017',
        'description': '"IMPOSSIBLE CHALLENGE" Try not to laugh while watching Funny Dog Videos Compilation 2017, The best and funniest dogs videos ever Hope you enjoy ...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/aEzZLXBH3rU/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/aEzZLXBH3rU/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/aEzZLXBH3rU/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'All Of Vines',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/cu5FKMp4GfejPiYj3bEf_2X3kYE"',
      'id': {
        'kind': 'youtube#video',
        'videoId': '2J5GzHoKl1Q'
      },
      'snippet': {
        'publishedAt': '2016-07-15T14:18:42.000Z',
        'channelId': 'UC9obdDRxQkmn_4YpcBMTYLw',
        'title': 'Dogs, man\'s best and funniest friends - funny dog compilation',
        'description': 'It is never boring with our furry besties! They just don\'t fail to make our day mor entertaining :D Hope you like our compilation, please share it and SUBSCRIBE!',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/2J5GzHoKl1Q/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/2J5GzHoKl1Q/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/2J5GzHoKl1Q/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'Tiger FunnyWorks',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/ziDBY04E7MXwH4g-vEEk-XLXWjo"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'NZ74oFctP_g'
      },
      'snippet': {
        'publishedAt': '2018-04-26T21:23:37.000Z',
        'channelId': 'UC9k-yiEpRHMNVOnOi_aQK8w',
        'title': 'Dogs Tested to See Whether They’d Defend Owner During Home Invasion',
        'description': 'If a masked intruder broke into your home, would your dog attack or run away? Inside Edition put some dogs to the test to find out whether they would confront ...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/NZ74oFctP_g/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/NZ74oFctP_g/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/NZ74oFctP_g/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'Inside Edition',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/ZjiyAF244qW6wir9VN1pxVIfLzk"',
      'id': {
        'kind': 'youtube#channel',
        'channelId': 'UCcqLkZqBfBOKmi4vrgkQ6yw'
      },
      'snippet': {
        'publishedAt': '2013-12-21T03:24:11.000Z',
        'channelId': 'UCcqLkZqBfBOKmi4vrgkQ6yw',
        'title': 'Dogs - Topic',
        'description': 'The domestic dog is a member of the genus Canis, which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore. The dog and ...',
        'thumbnails': {
          'default': {
            'url': 'https://yt3.ggpht.com/-wegtoaGfVQA/AAAAAAAAAAI/AAAAAAAAAAA/B51JbgmtYcQ/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'
          },
          'medium': {
            'url': 'https://yt3.ggpht.com/-wegtoaGfVQA/AAAAAAAAAAI/AAAAAAAAAAA/B51JbgmtYcQ/s240-c-k-no-mo-rj-c0xffffff/photo.jpg'
          },
          'high': {
            'url': 'https://yt3.ggpht.com/-wegtoaGfVQA/AAAAAAAAAAI/AAAAAAAAAAA/B51JbgmtYcQ/s800-c-k-no-mo-rj-c0xffffff/photo.jpg'
          }
        },
        'channelTitle': 'Dogs - Topic',
        'liveBroadcastContent': 'none'
      }
    }
  ]
};
   
const API_KEY = 'AIzaSyCqu7JqABYdWI2X1yhIAEwvCM5MNGtFw0g';

/*
  We want our store to hold a `videos` array of "decorated" objects - i.e. objects that
  have been transformed into just the necessary data to display on our page, compared to the large
  dataset Youtube will deliver to us.  Example object:
  
  {
    id: '98ds8fbsdy67',
    title: 'Cats dancing the Macarena',
    thumbnail: 'https://img.youtube.com/some/thumbnail.jpg'
  }

*/
const store = {
  videos: []
};

// TASK: Add the Youtube Search API Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.
const fetchVideos = function(searchTerm, callback) {
  const query = {
    part : 'snippet',
    key :API_KEY,
    // maxResults : 25,
    q: searchTerm, 
  };
  $.getJSON(BASE_URL, query, callback);  
};

//fetchVideos('james',() => console.log('testing again'));
// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array
// 3. Return an array of objects, where each object contains the keys `id`, `title`, 
// `thumbnail` which each hold the appropriate values from the API item object. You 
// WILL have to dig into several nested properties!
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
const decorateResponse = function(response) {
  return response.items.map(item => {
    return {
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.default.url,
    };
  });
};

const mockVideos = decorateResponse(mockData);
// console.log(res);
// decorateResponse(res);

// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT!
const generateVideoItemHtml = function(video) {
  return `<li data-id="${video.id}>
                <h3>${video.title}</h3>
                <img src="${video.thumbnail}" />
            </li>
    `;
};

const htmlVal = generateVideoItemHtml(mockVideos[0]);

// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video 
// objects and sets the array as the value held in store.items
// TEST IT!
const addVideosToStore = function(videos) {
  videos.forEach(video => {
    store.videos.push(video);
  });  
  console.log(store.videos);
};

//addVideosToStore(mockVideos);


// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
const render = function() {

};

// TASK:
// 1. Create a `handleFormSubmit` function that adds an event listener to the form
// 2. The listener should:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the `addVideosToStore` function
//   g) Inside the callback, run the `render` function 
// TEST IT!
const handleFormSubmit = function() {

};

// When DOM is ready:
$(function () {
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
});
