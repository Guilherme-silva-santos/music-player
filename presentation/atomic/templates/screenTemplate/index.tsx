import { colors, paddings } from '@/theme';
import { FC } from 'react';
import { StyleSheet, View } from 'react-native';

type ScreenTemplateProps = {
  children: React.ReactNode;
};

export const ScreenTemplate: FC<ScreenTemplateProps> = ({ children }) => {
  return <View style={styles.constainer}>{children}</View>;
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: colors.spotify.darkGray,
    padding: paddings.lg,
    gap: 16,
  },
});
