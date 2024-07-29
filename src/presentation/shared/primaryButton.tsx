import {Pressable, Text} from 'react-native';
import {globalStyles} from '../theme/theme.';

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
}

export const PrimaryButton = ({onPress, label}: PrimaryButtonProps) => {
  return (
    <Pressable style={globalStyles.primaryButton} onPress={onPress}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};
