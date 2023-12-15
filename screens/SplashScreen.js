import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

import { FONT, COLORS } from "../constants/theme";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Forminity</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryText,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: FONT.splashscreen,
    fontSize: 50,
    color: COLORS.secondary,
  },
});
