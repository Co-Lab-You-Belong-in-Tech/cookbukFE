/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Amplify, { Auth, Hub } from 'aws-amplify';

AppRegistry.registerComponent(appName, () => App);
