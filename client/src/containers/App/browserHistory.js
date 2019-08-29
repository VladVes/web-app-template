import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

// this one works as some kind of singleton (used in both - reducers and router)
export default history;
