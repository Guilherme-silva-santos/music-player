import { FC } from "react";
import { Text, TextProps } from "react-native";

type MontserratFontType =
  | "MontserratBlack"
  | "MontserratBold"
  | "MontserratSemiBold"
  | "MontserratMedium"
  | "MontserratRegular"
  | "MontserratLight";

type CustomTextProps = TextProps & {
  fontType?: MontserratFontType;
};

export const CustomText: FC<CustomTextProps> = ({
  fontType = "MontserratRegular",
  ...rest
}) => {
  return (
    <Text {...rest} style={[rest.style, { fontFamily: fontType }]}>
      {rest.children}
    </Text>
  );
};
