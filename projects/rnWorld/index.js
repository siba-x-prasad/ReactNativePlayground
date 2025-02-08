/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import LauncherApp from './src/screens/LauncherScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LauncherApp);
