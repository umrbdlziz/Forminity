import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { FONT, COLORS } from "../../constants";

const Header = ({ headerText }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{headerText}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 30,
    alignItems: "center",
  },
  text: {
    fontFamily: FONT.h1,
    fontSize: 40,
    letterSpacing: 4,
    color: COLORS.primaryText,
  },
});
