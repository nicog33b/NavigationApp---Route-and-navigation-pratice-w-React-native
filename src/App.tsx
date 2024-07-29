import './gesture-handler-native';
import {Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './presentation/routes/StackNavigator';
import {SideMenuNavigator} from './presentation/routes/DrawerNavigationSide';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
    </NavigationContainer>
  );
};
