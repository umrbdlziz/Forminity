import { View, StyleSheet, Text, Image } from "react-native";

import { COLORS, FONT } from "../../../constants";
import globalStyle from "../../../App/general.style";

const DisplayCard = ({ title, icon, number, desc }) => {
  return (
    <View style={[styles.card, globalStyle.shadow]}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
        <Image style={styles.titleIcon} source={icon} />
      </View>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};
export default DisplayCard;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    alignItems: "flex-start",
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    width: 150,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    width: 150,
    alignItems: "center",
  },
  titleText: {
    display: "flex",
    fontFamily: FONT.h2,
    fontSize: 16,
    width: 100,
  },
  titleIcon: {
    display: "flex",
    width: 25,
    height: 25,
  },
  number: {
    fontFamily: FONT.h1,
    fontSize: 40,
  },
  desc: {
    fontFamily: FONT.subtitle,
    fontSize: 12,
  },
});
