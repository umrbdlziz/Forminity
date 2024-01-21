import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import { Header, Cards } from "../components";
import { COLORS } from "../constants";

const LeaderboardPage = () => {
  const rankingList = [
    { name: "John Smith", score: 1000 },
    { name: "Jane", score: 900 },
    { name: "Jack", score: 800 },
    { name: "Jill", score: 700 },
    { name: "James", score: 600 },
    { name: "Jenny", score: 500 },
    { name: "Jasper", score: 400 },
    { name: "Jade", score: 300 },
    { name: "Jasmine", score: 200 },
    { name: "Jared", score: 100 },
    { name: "Jacop", score: 100 },
    { name: "Jackling", score: 50 },
  ];
  return (
    <View style={styles.container}>
      <Header headerText={"LEADERBOARD"} />
      <FlatList
        data={rankingList}
        renderItem={({ item, index }) => (
          <Cards name={item.name} score={item.score} index={index} />
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.flatlist}
      />
    </View>
  );
};
export default LeaderboardPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  flatlist: {},
});
