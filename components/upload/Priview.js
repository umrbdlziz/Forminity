import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CheckBox } from "@rneui/themed";

import { COLORS, FONT } from "../../constants";

const Priview = () => {
  return (
    <View>
      <Text>Priview</Text>
      <CheckBox
        title="Nasi Lemak"
        fontFamily={FONT.placeholder}
        textStyle={styles.checkBoxTextStyle}
        containerStyle={styles.checkBoxStyle}
      />
      <CheckBox
        title="Nasi Ayam"
        fontFamily={FONT.placeholder}
        textStyle={styles.checkBoxTextStyle}
        containerStyle={styles.checkBoxStyle}
      />
      <CheckBox
        title="Nasi Goreng"
        fontFamily={FONT.placeholder}
        textStyle={styles.checkBoxTextStyle}
        containerStyle={styles.checkBoxStyle}
      />
    </View>
  );
};

export default Priview;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    display: "flex",
    gap: 20,
  },
  checkBoxStyle: {
    backgroundColor: COLORS.background,
    width: "50%",
  },
  checkBoxTextStyle: {
    fontFamily: FONT.placeholder,
    color: COLORS.secondaryTextIcon,
    fontSize: 13,
    fontWeight: "normal",
  },
});
