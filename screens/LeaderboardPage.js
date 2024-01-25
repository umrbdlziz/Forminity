import { View, Text, FlatList, StyleSheet } from "react-native";

import { Header, Cards } from "../components";
import { COLORS } from "../constants";

import { useSelector } from "react-redux";

const LeaderboardPage = () => {
  const users = useSelector((state) => state.users.value);
  /*users: {
    desasiswa:
    email:
    fullname:
    matric:
    passwaord:
    point:
    school:
    username:
  } */
  const sortedUsers = [...users].sort((a, b) => b.data.point - a.data.point);

  return (
    <View style={styles.container}>
      <Header headerText={"LEADERBOARD"} />
      <FlatList
        data={sortedUsers}
        renderItem={({ item, index }) => (
          <Cards
            name={item.data.username}
            score={item.data.point}
            index={index}
          />
        )}
        keyExtractor={(item) => item.matric}
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
