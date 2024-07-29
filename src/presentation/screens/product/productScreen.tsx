import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {RootStacksParams} from '../../routes/StackNavigator';
import {globalStyles} from '../../theme/theme.';
import {useEffect} from 'react';

export const ProductScreen = () => {
  //obtener los parametros de esta ruta
  const params = useRoute<RouteProp<RootStacksParams, 'Product'>>().params;
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  console.log(params);
  return (
    <View style={globalStyles.container}>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
        }}>
        {params.id} - {params.name}
      </Text>
    </View>
  );
};
