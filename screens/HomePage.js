import { SafeAreaView, StyleSheet } from "react-native";
import { useState } from "react";

import {
  CardContainer,
  CategoryTabContainer,
  Header,
  SearchBarContainer,
} from "../components";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Header headerText={"FORMINITY"} />
      <SearchBarContainer setSearchTerm={setSearchTerm} />
      <CardContainer searchTerm={searchTerm} />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
