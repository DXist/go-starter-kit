/**
 * Created by laiff on 13.09.15.
 */
import {handleActions} from 'redux-actions';
import {incrementFontSize, decrementFontSize} from '#a/fontSize';

const initialState = {
  fontSize: 100
};

let fontSizeReducer = handleActions({
  [incrementFontSize]: (state, action) => ({
    fontSize: state.fontSize + action.payload * 10
  }),
  [decrementFontSize]: (state, action) => ({
    fontSize: state.fontSize - action.payload * 10
  })
}, initialState);

export default fontSizeReducer;