import {
  GET_YOUTUBE_TRENDING_VIDEOS_FAILURE,
  GET_YOUTUBE_TRENDING_VIDEOS_PROGRESS,
  GET_YOUTUBE_TRENDING_VIDEOS_SUCCESS,
  MOCK_LOGIN_FAILURE,
  MOCK_LOGIN_PROGRESS,
  MOCK_LOGIN_SUCCESS,
  SEARCH_YOUTUBE_VIDEOS_FAILURE,
  SEARCH_YOUTUBE_VIDEOS_PROGRESS,
  SEARCH_YOUTUBE_VIDEOS_SUCCESS,
} from './Main.actionTypes';
import {mainServices} from './Main.api';
import {takeLatest, call, put} from 'redux-saga/effects';

function* getYoutubeTrendingVideosSaga(action) {
  try {
    const result = yield call(
      mainServices.getYoutubeTrendingVideos,
      action.countryCode,
    );

    yield put({
      type: GET_YOUTUBE_TRENDING_VIDEOS_SUCCESS,
      result,
    });
  } catch (error) {
    yield put({
      type: GET_YOUTUBE_TRENDING_VIDEOS_FAILURE,
      error,
    });
  }
}

function* searchYoutubeTrendingVideosSaga(action) {
  try {
    const result = yield call(
      mainServices.searchYoutubeTrendingVideos,
      action.countryCode,
      action.query,
    );

    yield put({
      type: SEARCH_YOUTUBE_VIDEOS_SUCCESS,
      result,
    });
  } catch (error) {
    yield put({
      type: SEARCH_YOUTUBE_VIDEOS_FAILURE,
      error,
    });
  }
}

export function* mockLoginSaga(action) {
  try {
    const result = yield call(
      mainServices.mockLogin,
      action.email,
      action.password,
    );
    yield put({
      type: MOCK_LOGIN_SUCCESS,
      result,
    });
  } catch (error) {
    yield put({
      type: MOCK_LOGIN_FAILURE,
      error,
    });
  }
}

export function* watchGetYoutubeTrendingVideos() {
  yield takeLatest(
    GET_YOUTUBE_TRENDING_VIDEOS_PROGRESS,
    getYoutubeTrendingVideosSaga,
  );
}

export function* watchSearchYoutubeTrendingVideos() {
  yield takeLatest(
    SEARCH_YOUTUBE_VIDEOS_PROGRESS,
    searchYoutubeTrendingVideosSaga,
  );
}

export function* watchMockLogin() {
  yield takeLatest(MOCK_LOGIN_PROGRESS, mockLoginSaga);
}
