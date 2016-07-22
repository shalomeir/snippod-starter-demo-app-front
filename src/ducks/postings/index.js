const debug = require('utils/getDebugger')('postings');
import { combineReducers } from 'redux';
import paginate from 'helpers/paginate';
import { POSTS_BY_SORTING_OPTION_ARRAY, IO_POST_AT_POSTS_BY_SORTING_OPTION_ARRAY } from './posts';

export const POSTS_BY_SORTING_OPTION = 'postsBySortingOption';

const postings = combineReducers({
  [POSTS_BY_SORTING_OPTION]: paginate({
    mapActionToKey: action => action.key,
    types: POSTS_BY_SORTING_OPTION_ARRAY,
    subTypes: IO_POST_AT_POSTS_BY_SORTING_OPTION_ARRAY
  })
});

export default postings;
