import { applyMiddleware } from 'redux';
import prodStore from './configureStore.prod';
import DevTools from '../components/DevTools';

export default params => prodStore([...params, applyMiddleware(DevTools.instrument)]);
