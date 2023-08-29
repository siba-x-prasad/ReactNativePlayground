/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import App from './App';
import Hello from './HelloReact';
import Component from './src/basics/Components';
import StyleExample from './src/basics/StyleExample';
import FlexBoxExample1 from './src/flexbox/FlexBosExample1';

//styles
import Style1 from './src/styles/style1';
import Style2 from './src/styles/style2';
import Style3 from './src/styles/style3';
import Style4 from './src/styles/style4';

// State and Events
// import StateAndEventComponent from './src/basics/StateAndEventComponent';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Hello);
// basic components
AppRegistry.registerComponent(appName, () => StateAndEventComponent);
