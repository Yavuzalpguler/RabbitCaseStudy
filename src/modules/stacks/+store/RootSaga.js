import {all} from 'redux-saga/effects';

import {
  watchGetYoutubeTrendingVideos,
  watchMockLogin,
  watchSearchYoutubeTrendingVideos,
} from './Main/Main.saga';
export default function* RootSaga() {
  yield all([
    /* App Saga */

    watchGetYoutubeTrendingVideos(),
    watchSearchYoutubeTrendingVideos(),
    watchMockLogin(),
  ]);
}
