import {View} from 'react-native';
import {globalStyles} from '../../theme/theme.';
import {PrimaryButton} from '../../shared/primaryButton';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {type RootStacksParams} from '../../routes/StackNavigator';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStacksParams>>();

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Products"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Settings"
      />
    </View>
  );
};
