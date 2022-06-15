import type { Store } from 'redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { LOCALSTORAGE_KEY } from '../constants';
import log from '../log';
import { actionCreators } from './actions';
import type { RootState } from './reducers';
import { rootReducer } from './reducers';
import sagas from './sagas';

// Convert object to string and store in localStorage
function saveToLocalStorage(state: RootState): void {
  try {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    log.warn((e as Error).message, e);
  }
}

// Load string from localStorage and convert into a RootState object
// invalid output must be undefined
function loadFromLocalStorage(): RootState | undefined {
  try {
    const serializedState = localStorage.getItem(LOCALSTORAGE_KEY);

    if (!serializedState) return undefined;

    return JSON.parse(serializedState);
  } catch (e) {
    log.warn((e as Error).message, e);

    return undefined;
  }
}

// Setup redux store
export const setupStore = ({ isServer }: { isServer: boolean }): Store => {
  if (isServer) {
    return createStore(rootReducer);
  }

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    loadFromLocalStorage(),
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(sagas);

  store.subscribe(() => saveToLocalStorage(store.getState()));

  store.dispatch(actionCreators.bootstrap({}));

  return store;
};
