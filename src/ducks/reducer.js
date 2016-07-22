import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';
import { merge, omit } from 'lodash';

import application from './application/application';
import postings from './postings';

//Root Entities for normalization json schema
const initialEntitiesState = {
  posts: {}
};

//Updates an entity cache in response to any action with response.entities.
function entities(state = initialEntitiesState, action = {}) {
  const { RELOAD_PAGE } = require('ducks/application/application');
  const { INIT_ALL_STATE, DELETE_ALL_ENTITIES, UPDATE_ENTITY, DELETE_ENTITY } = require('ducks/globalActions');

  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities);
  }
  switch (action.type) {
    case UPDATE_ENTITY:
      if (typeof action.kind !== 'string') {
        throw new Error('Expected entity kind to be a string.');
      }
      if (!action.id) {
        throw new Error('Expected entity id.');
      }
      if (!action.entity) {
        throw new Error('Expected entity object.');
      }
      return merge({}, state, { [action.kind]: { [action.id]: action.entity } });

    case DELETE_ENTITY:
      if (typeof action.kind !== 'string') {
        throw new Error('Expected entity kind to be a string.');
      }
      if (!action.id) {
        throw new Error('Expected entity id.');
      }
      const deletedKindObject = omit(state[action.kind], action.id);
      return merge({}, omit(state, action.kind), { [action.kind]: deletedKindObject });

    case RELOAD_PAGE:
    case INIT_ALL_STATE:
    case DELETE_ALL_ENTITIES:
      return initialEntitiesState;
    default:
      return state;
  }
}

export default combineReducers({
  routing: routeReducer,
  reduxAsyncConnect,
  application,
  entities,
  postings
});
