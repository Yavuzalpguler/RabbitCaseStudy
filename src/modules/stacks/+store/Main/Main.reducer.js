import {
  UPDATE_MAIN_CUSTOM_STATE,
  GET_YOUTUBE_TRENDING_VIDEOS_FAILURE,
  GET_YOUTUBE_TRENDING_VIDEOS_PROGRESS,
  GET_YOUTUBE_TRENDING_VIDEOS_SUCCESS,
  SEARCH_YOUTUBE_VIDEOS_FAILURE,
  SEARCH_YOUTUBE_VIDEOS_PROGRESS,
  SEARCH_YOUTUBE_VIDEOS_SUCCESS,
  MOCK_LOGIN_FAILURE,
  MOCK_LOGIN_PROGRESS,
  MOCK_LOGIN_SUCCESS,
  PAGINATE_YOUTUBE_VIDEOS_FAILURE,
  PAGINATE_YOUTUBE_VIDEOS_PROGRESS,
  PAGINATE_YOUTUBE_VIDEOS_SUCCESS,
} from './Main.actionTypes';

const initialState = {
  youtubeTrendingVideos: {
    success: null,
    loading: true,
  },
  user: {
    success: null,
    loading: false,
    error: null,
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MAIN_CUSTOM_STATE:
      return {
        ...state,
        [action?.key]: action?.value,
      };

    case GET_YOUTUBE_TRENDING_VIDEOS_PROGRESS:
      return {
        ...state,
        youtubeTrendingVideos: {
          ...state.youtubeTrendingVideos,
          loading: true,
        },
      };
    case GET_YOUTUBE_TRENDING_VIDEOS_SUCCESS:
      return {
        ...state,
        youtubeTrendingVideos: {
          ...state.youtubeTrendingVideos,
          ...action.result,
          loading: false,
        },
      };

    case GET_YOUTUBE_TRENDING_VIDEOS_FAILURE:
      return {
        ...state,
        youtubeTrendingVideos: {
          ...state.youtubeTrendingVideos,

          loading: false,
        },
      };

    case PAGINATE_YOUTUBE_VIDEOS_FAILURE:
      return {
        ...state,
        youtubeTrendingVideos: {
          ...state.youtubeTrendingVideos,
          loading: false,
        },
      };

    case PAGINATE_YOUTUBE_VIDEOS_PROGRESS:
      return {
        ...state,
        youtubeTrendingVideos: {
          ...state.youtubeTrendingVideos,
          loading: true,
        },
      };

    case PAGINATE_YOUTUBE_VIDEOS_SUCCESS:
      const videos = [
        ...(state.youtubeTrendingVideos?.items || []),
        ...(action?.result?.items || []),
      ];

      // remove duplicates

      return {
        ...state,
        youtubeTrendingVideos: {
          ...state.youtubeTrendingVideos,
          loading: false,
          success: true,
          nextPageToken: action?.result?.nextPageToken,
          items: videos,
        },
      };

    case SEARCH_YOUTUBE_VIDEOS_PROGRESS:
      return {
        ...state,
        youtubeTrendingVideos: {
          ...state.youtubeTrendingVideos,
          loading: true,
        },
      };
    case SEARCH_YOUTUBE_VIDEOS_SUCCESS:
      return {
        ...state,
        youtubeTrendingVideos: {
          ...state.youtubeTrendingVideos,
          ...action.result,
          loading: false,
        },
      };

    case SEARCH_YOUTUBE_VIDEOS_FAILURE:
      return {
        ...state,
        youtubeTrendingVideos: {
          ...state.youtubeTrendingVideos,
          loading: false,
        },
      };

    case MOCK_LOGIN_PROGRESS:
      return {
        ...state,
        user: {
          ...state.user,
          loading: true,
        },
      };
    case MOCK_LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.result,
          loading: false,
          error: null,
          success: true,
        },
      };

    case MOCK_LOGIN_FAILURE:
      return {
        ...state,
        user: {
          ...state.user,
          loading: false,
          error: action.error.error,
          success: false,
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
