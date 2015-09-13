import React from 'react';
import Router from 'react-router';
import assign from 'lodash/object/assign';
import {Provider} from 'react-redux';
import Helmet from 'react-helmet';

import routes from './routes';
import loadProps from '#app/utils/loadProps';
import html from './html';

/**
 * Handle HTTP request at Golang server
 *
 * @param   Object   options  request options
 * @param   Function cbk      response callback
 */
export default function (options, cbk) {

  // fetch polyfill in action
  fetch('/api/v1/conf').then((r) => {
    return r.json();
  }).then((conf) => {

    let result = {
      error: null,
      body: null,
      redirect: null
    };


    const router = Router.create({
      routes: routes,
      location: options.url,
      onError: error => {
        throw error;
      },
      onAbort: abortReason => {
        const error = new Error();

        if (abortReason.constructor.name === 'Redirect') {
          const { to, params, query } = abortReason;
          const url = router.makePath(to, params, query);
          error.redirect = url;
        }

        throw error;
      }
    });

    import store from '../store';
    //flux.getStore('app').setAppConfig(conf);

    try {
      router.run((Handler, state) => {
        const routeHandlerInfo = {store, state};
        loadProps(state.routes, 'loadProps', routeHandlerInfo).then(() => {
          const app = React.renderToString(
            <Provider store={store}>
              {() => <Handler routerState={state}/>}
            </Provider>
          );
          const head = Helmet.rewind();
          result.body = html({app, head});
          cbk(result);
        });
      });
    } catch (error) {
      if (error.redirect) {
        result.redirect = error.redirect;
      } else {
        result.error = error;
      }

      // send error
      cbk(result);
    }

  });
}
