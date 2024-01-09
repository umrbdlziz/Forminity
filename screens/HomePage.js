import { SafeAreaView, StyleSheet } from "react-native";

import {
  CardContainer,
  CategoryTabContainer,
  Header,
  SearchBarContainer,
} from "../components";

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header headerText={"FORMINITY"} />
      <SearchBarContainer />
      <CategoryTabContainer />
      <CardContainer />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
