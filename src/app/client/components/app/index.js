import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { RouteHandler } from 'react-router';
import { createSelector} from 'reselect';
import { connect } from 'react-redux';
import { body, bodyWrapper } from './styles';

class Html extends Component {
  render () {
    return <html lang='en' style={{fontSize: this.props.fontSize + 'px'}}>
    <head>
      <meta charSet='UTF-8'/>
      <link rel='stylesheet' href={'/static/build/bundle.css?' + this.props.count}/>
      <link rel='icon' type='image/vnd.microsoft.icon' href={require('./favicon.ico')}/>
      <title>{this.props.title}</title>
    </head>
    <body className={body}>
    <div className={bodyWrapper}>
      {this.props.children}
    </div>
    <script async src='/static/build/bundle.js'></script>
    </body>
    </html>;
  }
}

const fontSizeSelector = state => state.fontSize;

const selector = createSelector(
  fontSizeSelector,
    fontSize => ({
    fontSize
  })
);

@connect(selector)
export default class App extends Component {

  render () {
    return <Html>
      <RouteHandler {...this.props} />
    </Html>
  }
};
