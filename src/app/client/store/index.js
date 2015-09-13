/**
 * Created by laiff on 13.09.15.
 */

import {createStore} from 'redux';
import reducers from '../reducers';

let store = createStore(reducers);

export default store;