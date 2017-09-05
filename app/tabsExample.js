import { Navigation } from 'react-native-navigation';

import Scene1 from './scenes/Scene1';
import Scene2 from './scenes/Scene2';
import Scene3 from './scenes/Scene3';
import Scene4 from './scenes/Scene4';

export default () => {
  Navigation.registerComponent('Scene1', () => Scene1);
  Navigation.registerComponent('Scene2', () => Scene2);
  Navigation.registerComponent('Scene3', () => Scene3);
  Navigation.registerComponent('Scene4', () => Scene4);

  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'One',
        screen: 'Scene1',
        icon: require('./images/react.png'),
        selectedIcon: require('./images/react-selected.png'),
        title: 'Scene One'
      },
      {
        label: 'Two',
        screen: 'Scene2',
        icon: require('./images/icono.png'),
        selectedIcon: require('./images/icono-selected.png'),
        title: 'Scene Two'
      }
    ]
  });
};
