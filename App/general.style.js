import { StyleSheet } from "react-native";
import { COLORS, FONT } from "../constants";

const globalStyle = StyleSheet.create({
  Btn: {
    backgroundColor: COLORS.secondary,
    width: 300,
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "rgba(0 0 0 0.3)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 4,
  },
  textBtn: {
    fontFamily: FONT.btn,
    color: COLORS.primary,
    fontSize: 17,
    justifyContent: "flex-end",
    textAlign: "center",
  },
});

export default globalStyle;
