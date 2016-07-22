const debug = require('utils/getDebugger')('application');
import { browserHistory as history } from 'react-router';

const SHOW_LOGIN_DIALOG = 'application/application/SHOW_LOGIN_DIALOG';
const CLOSE_DIALOG = 'application/application/CLOSE_DIALOG';

export function showLoginDialog() {
  return {
    type: SHOW_LOGIN_DIALOG
  };
}

export function closeDialog() {
  return {
    type: CLOSE_DIALOG
  };
}

const initialState = {
  loginDialog: false
};

// Modal Window Overlay switch reducers.
export default function reducer(state = initialState, action = {}) {

  switch (action.type) {
    case SHOW_LOGIN_DIALOG:
      return {
        ...state,
        loginDialog: true
      };
    case CLOSE_DIALOG:
      return {
        ...state,
        loginDialog: false
      };
    default:
      return state;
  }
}


// This function is used for override query url
export function overrideQuery(query) {
  return (dispatch, getState) => {
    const location = getState().routing.location;
    history.replace({
      state: location.state ? location.state : null,
      pathname: location.pathname,
      query: Object.assign(location.query, query)
    });
  };
}

export function pushQuery(query) {
  return (dispatch, getState) => {
    const location = getState().routing.location;
    history.push({
      state: location.state ? location.state : null,
      pathname: location.pathname,
      query
    });
  };
}

export function deleteQuery(queryKey) {
  return (dispatch, getState) => {
    const location = getState().routing.location;
    if (location.query[queryKey]) {
      delete location.query[queryKey];
      history.push(location);
    }
  };
}

export function pushHistoryState(state) {
  return (dispatch, getState) => {
    const location = getState().routing.location;
    history.push({
      state,
      pathname: location.pathname,
      query: location.query
    });
  };
}

export function replaceHistoryState(state) {
  return (dispatch, getState) => {
    const location = getState().routing.location;
    history.replace({
      state,
      pathname: location.pathname,
      query: location.query
    });
  };
}

export function overrideNextPathname(nextPathname) {
  return (dispatch, getState) => {
    const location = getState().routing.location;
    const state = location.state ? location.state : {};
    history.replace({
      state: Object.assign(state, { nextPathname }),
      pathname: location.pathname,
      query: Object.assign(location.query, { redirect: encodeURIComponent(nextPathname) })
    });
  };
}

export function pushPath(pathname) {
  return () => {
    history.push(pathname);
  };
}

export function replacePath(pathname) {
  return () => {
    history.replace(pathname);
  };
}

export function pushPathWithQuery(pathname) {
  return (dispatch, getState) => {
    const location = getState().routing.location;
    history.push({
      pathname,
      query: location.query
    });
  };
}

export function pushLocation(location) {
  return () => {
    history.push(location);
  };
}

export function replaceLocation(location) {
  return () => {
    history.replace(location);
  };
}


// https://github.com/reactjs/react-router/issues/1982
export function refreshPage() {
  return (dispatch, getState) => {
    const location = getState().routing.location;
    history.replace('/');
    history.replace(location.pathname);
  };
}

//If defaultPathname and redirect query and nextPathname is not exist, do nothing.
export function redirectPushPath(defaultPathname) {

  return (dispatch, getState) => {
    const location = getState().routing.location;
    let pathname = defaultPathname;

    if (location.query.redirect) {
      pathname = decodeURIComponent(location.query.redirect);
    } else if (location.state && location.state.nextPathname) {
      pathname = location.state.nextPathname;
    }

    if (pathname) {
      history.push(pathname);
    }
  };
}

export function redirectReplacePath(defaultPathname) {

  return (dispatch, getState) => {
    const location = getState().routing.location;
    let pathname = defaultPathname;

    if (location.query.redirect) {
      pathname = decodeURIComponent(location.query.redirect);
    } else if (location.state && location.state.nextPathname) {
      pathname = location.state.nextPathname;
    }

    if (pathname) {
      history.replace(pathname);
    }
  };
}
