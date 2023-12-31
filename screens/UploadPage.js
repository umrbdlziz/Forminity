import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import { BuilderQuestion, Header, InputCreator, Priview } from "../components";
import { COLORS, FONT } from "../constants";

const TopTab = createMaterialTopTabNavigator();

const UploadPage = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header headerText={"UPLOAD"} />
      <BuilderQuestion />
    </View>
  );
};
export default UploadPage;

const styles = StyleSheet.create({
  uploadPage: {
    backgroundColor: COLORS.background,
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});
