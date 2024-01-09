import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

import { FONT, COLORS } from "../../constants";
import globalStyle from "../../App/general.style";

const Cards = ({ title, desc, qNum, category }) => {
  return (
    <TouchableOpacity style={[styles.container, globalStyle.shadow]}>
      <Text style={styles.titleContainer}>{title}</Text>
      <Text style={styles.descContainer}>{desc}</Text>
      <View style={styles.secondContainer}>
        <View style={styles.qNumContainer}>
          <Text style={styles.qNumText}>{qNum}Q</Text>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>{category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Cards;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    width: 350,
    paddingVertical: 20,
    paddingHorizontal: 15,
    gap: 5,
  },
  titleContainer: {
    fontFamily: FONT.h2,
    fontSize: 16,
  },
  descContainer: {
    fontFamily: FONT.subtitle,
  },
  secondContainer: {
    flexDirection: "row",
    gap: 10,
  },
  qNumContainer: {
    backgroundColor: COLORS.secondaryTextIcon,
    borderRadius: 30,
    paddingVertical: 4,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  qNumText: {
    color: COLORS.primary,
    fontFamily: FONT.text,
    fontSize: 12,
  },
  categoryContainer: {
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 15,
  },
  categoryText: {
    fontFamily: FONT.text,
    fontSize: 12,
    color: COLORS.primary,
  },
});
