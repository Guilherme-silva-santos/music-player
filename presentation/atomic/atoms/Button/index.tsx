import { colors, paddings, radius } from '@/theme';
import { FC } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { CustomText } from '../CustomText';

type Props = TouchableOpacityProps & {
  title: string;
  selected?: boolean;
};

export const Button: FC<Props> = ({ title, selected }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.container,
        {
          borderColor: selected ? colors.spotify.green : colors.gray[700],
          backgroundColor: selected ? colors.spotify.green : '',
        },
      ]}
    >
      <CustomText
        fontType="MontserratBold"
        style={[{ color: selected ? colors.offWhite : colors.gray[700] }]}
      >
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: radius.full,
    padding: paddings.md,
    borderWidth: 2,
  },
});
