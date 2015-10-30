import React from 'react';
import Router from 'react-router';
import {Provider} from 'react-redux';
import RenderToString from './RenderToString';
import loadProps from '#app/utils/loadProps';

import store from '../store';
import routes from './routes';

export const renderToString = RenderToString;

require('../styles');

// Style live reload
if (module.hot) {
  // let c = 0;
  // module.hot.accept('../styles', () => {
  //   require('../styles');
  //   const a = document.createElement('a');
  //   const link = document.querySelector('link[rel="stylesheet"]');
  //   a.href = link.href;
  //   a.search = '?' + ++c;
  //   link.href = a.href;
  // });
}
