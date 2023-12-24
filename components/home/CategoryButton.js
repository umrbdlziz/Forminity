import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { FONT, COLORS } from "../../constants";
const CategoryButton = ({ title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CategoryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 8,
    height: 30,
    // paddingVertical: 6,
  },
  text: {
    color: COLORS.primaryText,
    fontFamily: FONT.subtitle,
    fontSize: 14,
  },
});
