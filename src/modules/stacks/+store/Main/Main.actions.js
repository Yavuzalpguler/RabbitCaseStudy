import {
  UPDATE_MAIN_CUSTOM_STATE,
  GET_YOUTUBE_TRENDING_VIDEOS_PROGRESS,
  SEARCH_YOUTUBE_VIDEOS_PROGRESS,
  MOCK_LOGIN_PROGRESS,
} from './Main.actionTypes';

export const updateMainCustomState = (key, value) => ({
  type: UPDATE_MAIN_CUSTOM_STATE,
  key,
  value,
});

export const getYoutubeTrendingVideos = countryCode => ({
  type: GET_YOUTUBE_TRENDING_VIDEOS_PROGRESS,
  countryCode,
});

export const searchYoutubeTrendingVideos = (countryCode, query) => ({
  type: SEARCH_YOUTUBE_VIDEOS_PROGRESS,
  countryCode,
  query,
});

export const mockLogin = (email, password) => ({
  type: MOCK_LOGIN_PROGRESS,
  email,
  password,
});
