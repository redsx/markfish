import { createStore, applyMiddleware, Store } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducer/index'
import { composeWithDevTools } from 'redux-devtools-extension'

let store: Store;
if (process.env.NODE_ENV === 'development') {
  store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk)
  ));
} else {
  const finalCreactStore = applyMiddleware(thunk)(createStore);
  store = finalCreactStore(reducer);
}

let unsubscribe = store.subscribe(() => {
  console.log('store监控:', store.getState())
}
);
export default store;