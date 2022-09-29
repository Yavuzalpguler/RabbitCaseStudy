import {storeData} from '../../../../common/Utility';

function getYoutubeTrendingVideos(countryCode) {
  return fetch(
    'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=' +
      countryCode +
      '&maxResults=10' +
      '&key=' +
      'AIzaSyBQ9WILtTqScelHg7I0V-V9skWV1AOTTSE',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  )
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      return responseJson;
    });
}

function paginateYoutubeTrendingVideos(countryCode, nextPageToken) {
  return fetch(
    'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=' +
      countryCode +
      '&maxResults=10' +
      '&pageToken=' +
      nextPageToken +
      '&key=' +
      'AIzaSyBQ9WILtTqScelHg7I0V-V9skWV1AOTTSE',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  )
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      return responseJson;
    });
}

function searchYoutubeTrendingVideos(countryCode, query) {
  return fetch(
    'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=' +
      query +
      '&regionCode=' +
      countryCode +
      '&key=' +
      'AIzaSyBQ9WILtTqScelHg7I0V-V9skWV1AOTTSE',
    {
      method: 'GET',
      headers: {
        // Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  )
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      return responseJson;
    });
}

function mockLogin(email, password) {
  //Mock a promise that resolves after 2 seconds
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'rabbit@mail.com' && password === '123123') {
        storeData('access_token', '1234567890');
        resolve({
          user: {
            name: 'Rabbit',
            email: email,
            token: '1234567890',
            success: true,
          },
        });
      } else {
        reject({
          error: 'Invalid email or password',
        });
      }
    }, 2000);
  });
}

export const mainServices = {
  getYoutubeTrendingVideos,
  searchYoutubeTrendingVideos,
  mockLogin,
  paginateYoutubeTrendingVideos,
};
