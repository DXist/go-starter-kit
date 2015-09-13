/**
 * Created by laiff on 13.09.15.
 */

import {createAction} from 'redux-actions';
import {constant} from '#utils/combinators';

export const incrementFontSize = 'incrementFontSize';
export const decrementFontSize = 'decrementFontSize';

export const incrementFontSizeAction = createAction(incrementFontSize, constant(1));
export const decrementFontSizeAction = createAction(decrementFontSize, constant(-1));
