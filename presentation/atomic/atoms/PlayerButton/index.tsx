import { colors, paddings, radius } from '@/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { FC } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type PlayerButtonProps = TouchableOpacityProps & {
  icon: iconNames;
};

type iconNames = keyof typeof MaterialIcons.glyphMap;

export const PlayerButton: FC<PlayerButtonProps> = ({ icon, ...rest }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container} {...rest}>
      <MaterialIcons name={icon} size={24} color={colors.spotify.black} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: radius.full,
    backgroundColor: colors.offWhite,
    padding: paddings.md,
  },
});
