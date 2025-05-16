import { Button, CustomText, PlayerButton } from '@/presentation/atomic/atoms';
import { ScreenTemplate } from '@/presentation/atomic/templates';
import { colors } from '@/theme';

export default function HomeScreen() {
  return (
    <ScreenTemplate>
      <CustomText
        fontType="MontserratBold"
        style={{ color: colors.spotify.green }}
      >
        Home
      </CustomText>
      <PlayerButton icon="play-arrow" />
      <Button selected title="Button" />
    </ScreenTemplate>
  );
}
