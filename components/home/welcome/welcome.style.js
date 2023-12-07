import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants/theme";

const style = StyleSheet.create({
  header: {
    paddingTop: SIZES.xxLarge,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  forminity: {
    fontFamily: FONT.h1,
    fontSize: SIZES.xxLarge,
    letterSpacing: 4,
    color: COLORS.primaryText,
    // fontWeight: "700",
    // textAlign: "left",
  },
});

export default style;
