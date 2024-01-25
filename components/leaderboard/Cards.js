import { View, Text, StyleSheet, Image } from "react-native";

import { icons, COLORS, FONT } from "../../constants";
const Cards = ({ name, score, index }) => {
  return (
    <View style={styles.container} key={name}>
      {index === 0 && <Image source={icons.firsPlace} style={styles.img} />}
      {index === 1 && <Image source={icons.secondPlace} style={styles.img} />}
      {index === 2 && <Image source={icons.thirdPlace} style={styles.img} />}
      {index > 2 && (
        <View style={styles.numRanking}>
          <Text style={styles.numRankingText}>{index + 1}</Text>
        </View>
      )}
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.nameText}>{score}</Text>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.primary,
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
    height: 60,
    borderWidth: 0.3,
    borderColor: COLORS.tertiary,
  },
  img: {
    width: 40,
    height: 40,
  },
  nameText: {
    fontFamily: FONT.text,
    color: COLORS.primaryText,
  },
  numRanking: {
    marginHorizontal: 5,
    backgroundColor: COLORS.tertiary,
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
  },
  numRankingText: {
    fontFamily: FONT.text,
    fontSize: 12,
    color: COLORS.primary,
    textAlign: "center",
  },
});
