/**
 * @format
 */

import { Theme } from 'teaset';
import './app/resource/Global';
import './app/images/images'
import DefaultTheme from './app/resource/thems/DefaultTheme';
Theme.set(DefaultTheme);

import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';

if (!__DEV__) {
    global.console = {
        log: () => { },
        info: () => { },
        debug: () => { },
        warn: () => { }
    }

}

AppRegistry.registerComponent(appName, () => App);
