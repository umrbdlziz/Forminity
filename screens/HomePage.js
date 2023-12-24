import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";

import {
  CardContainer,
  CategoryTabContainer,
  Header,
  SearchBarContainer,
} from "../components";

const HomePage = () => {
  const navigation = useNavigation();

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
