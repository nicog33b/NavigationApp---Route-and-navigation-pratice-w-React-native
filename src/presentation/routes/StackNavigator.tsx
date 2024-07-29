import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/homeScreen';
import {ProductsScreen} from '../screens/products/productScreen';
import {ProfileScreen} from '../screens/profile/profileScreen';
import {SettingsScreen} from '../screens/settings/SettingsScreen';
import {ProductScreen} from '../screens/product/productScreen';

export type RootStacksParams = {
  Home: undefined;
  Product: {id: number; name: string};
  Products: undefined;
  Settings: undefined;
};
const Stack = createStackNavigator<RootStacksParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />

      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
