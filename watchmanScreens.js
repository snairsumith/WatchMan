import { Navigation } from 'react-native-navigation';

import Login from './src/components/Login/index';
import Dashboard from './src/components/DashBoard/Index';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('watchman.Dashboard', () => Dashboard);  
  Navigation.registerComponent('watchman.Login', () => Login);
  
}