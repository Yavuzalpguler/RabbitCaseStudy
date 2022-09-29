import {all} from 'redux-saga/effects';

import {
  watchGetYoutubeTrendingVideos,
  watchMockLogin,
  watchPaginateYoutubeTrendingVideos,
  watchSearchYoutubeTrendingVideos,
} from './Main/Main.saga';
export default function* RootSaga() {
  yield all([
    /* App Saga */

    watchGetYoutubeTrendingVideos(),
    watchPaginateYoutubeTrendingVideos(),
    watchSearchYoutubeTrendingVideos(),
    watchMockLogin(),
  ]);
}
