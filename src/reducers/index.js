import { combineReducers } from 'redux';

import posts from './posts';
import toggle from './toggle';

export default combineReducers({
    posts, toggle
});