import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme.';
import {PrimaryButton} from '../../shared/primaryButton';
import {StackActions, useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text>SettingsScreen</Text>
      <PrimaryButton
        label="Regresar"
        //anterior goBack()
        onPress={() => navigation.goBack()}
      />
      <PrimaryButton
        label="Volver al inicio"
        onPress={() => navigation.dispatch(StackActions.popToTop)}
      />
    </View>
  );
};
