/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './watchmanScreens';

AppRegistry.registerComponent(appName, () => App);
registerScreens();

Navigation.startSingleScreenApp({
    screen: {
        screen: 'watchman.Dashboard', // unique ID registered with Navigation.registerScreen
        navigatorStyle: {
            navBarHidden: true
        }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {},// override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional),
        animationType: 'fade'
    }
})

