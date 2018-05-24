import { applyMiddleware } from 'redux';
import prodStore from './configureStore.prod';
import DevTools from '../components/DevTools';

// todo: according to news-feed core - its possible to setup hot reload (or even module reload) for reducers
export default () => prodStore([ applyMiddleware(DevTools.instrument) ]);
