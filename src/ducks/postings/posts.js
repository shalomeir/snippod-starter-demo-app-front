const debug = require('utils/getDebugger')('posts');
import Schemas from 'ducks/Schemas';

/********************************
 get postsBySortingOption pagination
 ********************************/
const POSTS_BY_SORTING_OPTION_REQUEST = 'posts/posts/POSTS_BY_SORTING_OPTION_REQUEST';
const POSTS_BY_SORTING_OPTION_SUCCESS = 'posts/posts/POSTS_BY_SORTING_OPTION_SUCCESS';
const POSTS_BY_SORTING_OPTION_FAILURE = 'posts/posts/POSTS_BY_SORTING_OPTION_FAILURE';

export const POSTS_BY_SORTING_OPTION_ARRAY = [
  POSTS_BY_SORTING_OPTION_REQUEST,
  POSTS_BY_SORTING_OPTION_SUCCESS,
  POSTS_BY_SORTING_OPTION_FAILURE
];

const ADD_POST_TO_TOP_AT_POSTS_BY_SORTING_OPTION = 'posts/posts/ADD_POST_TO_TOP_AT_POSTS_BY_SORTING_OPTION';
const ADD_POST_TO_BOTTOM_AT_POSTS_BY_SORTING_OPTION = 'posts/posts/ADD_POST_TO_BOTTOM_AT_POSTS_BY_SORTING_OPTION';
const DELETE_POST_AT_POSTS_BY_SORTING_OPTION = 'posts/posts/DELETE_POST_AT_POSTS_BY_SORTING_OPTION';
const DELETE_ALL_AT_POSTS_BY_SORTING_OPTION = 'posts/posts/DELETE_ALL_AT_POSTS_BY_SORTING_OPTION';

export const IO_POST_AT_POSTS_BY_SORTING_OPTION_ARRAY = [
  ADD_POST_TO_TOP_AT_POSTS_BY_SORTING_OPTION,
  ADD_POST_TO_BOTTOM_AT_POSTS_BY_SORTING_OPTION,
  DELETE_POST_AT_POSTS_BY_SORTING_OPTION,
  DELETE_ALL_AT_POSTS_BY_SORTING_OPTION
];

function fetchPostsBySortingOption(sortingOption, nextPageUrl) {
  return {
    key: sortingOption,
    types: POSTS_BY_SORTING_OPTION_ARRAY,
    promise: (client) => client.get(nextPageUrl, {
      schema: Schemas.POST_ARRAY
    })
  };
}

// Relies on Redux Thunk middleware.
export function loadPostsBySortingOption(sortingOption, nextPage) {
  return (dispatch, getState) => {
    const {
      nextPageUrl = '/posts/?sorting=' + sortingOption,
      pageCount = 0
      } = getState().postings.postsBySortingOption[sortingOption] || {};

    if (pageCount > 0 && !nextPage) {
      return null;
    }

    return dispatch(fetchPostsBySortingOption(sortingOption, nextPageUrl));
  };
}
