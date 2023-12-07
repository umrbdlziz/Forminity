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
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.subtitle,
  },
});

export default style;
