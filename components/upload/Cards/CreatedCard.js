import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import { COLORS, FONT, icons } from "../../../constants";

const CreatedCard = ({ title, time, desc, number }) => {
  return (
    <View style={styles.displayCard}>
      <View style={styles.topDisplayCard}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {title}
        </Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>PUBLISHED</Text>
        </View>
      </View>
      <View style={styles.topDisplayCard}>
        <Text style={styles.time}>{time}</Text>
        <View style={styles.topDisplayCard}>
          <Image source={icons.complete} style={styles.img} />
          <Text>{number}</Text>
        </View>
      </View>
      <View style={styles.desc}>
        <Text style={styles.descText} numberOfLines={3} ellipsizeMode="tail">
          {desc}
        </Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>View Submission</Text>
        <Image style={styles.btnImg} source={icons.rightArrow} />
      </TouchableOpacity>
    </View>
  );
};

export default CreatedCard;

const styles = StyleSheet.create({
  displayCard: {
    display: "flex",
    width: 300,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: COLORS.secondaryTextIcon,
  },
  topDisplayCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: FONT.h2,
    fontSize: 16,
    color: COLORS.primaryText,
    width: 190,
  },
  badge: {
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    justifyContent: "center",
    padding: 5,
  },
  badgeText: {
    fontFamily: FONT.btn,
    fontSize: 10,
    color: COLORS.primary,
  },
  time: {
    fontFamily: FONT.subtitle,
    fontSize: 14,
    color: COLORS.secondaryTextIcon,
  },
  img: {
    width: 15,
    height: 15,
  },
  desc: {
    height: 60,
    display: "flex",
    justifyContent: "flex-end",
  },
  descText: {
    fontFamily: FONT.text,
    fontSize: 12,
    color: COLORS.secondaryTextIcon,
    marginBottom: 5,
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    gap: 10,
    borderRadius: 10,
    borderColor: COLORS.secondaryTextIcon,
    borderWidth: 0.2,
    paddingVertical: 5,
  },
  btnText: {
    fontFamily: FONT.text,
    fontSize: 14,
    color: COLORS.primaryText,
  },
  btnImg: {
    width: 15,
    height: 15,
  },
});