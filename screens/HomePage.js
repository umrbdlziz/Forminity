import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

import { Header, SearchBarContainer } from "../components";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Header headerText={"FORMINITY"} />
      <SearchBarContainer />
    </View>
  );
};

export default HomePage;
