import { useState } from "react";
import { Divider } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";

import { FONT, COLORS } from "../../constants";
import AddButton from "./AddButton";
import RenderForms from "./RenderForms";

const BuilderQuestion = () => {
  return (
    <View style={styles.container}>
      <Divider inset={true} insetType="middle" width={1.5} />

      <RenderForms />

      <Divider inset={true} insetType="middle" width={1.5} />

      <View style={styles.addContainer}>
        <AddButton buttonType={"shortAnswer"} />
        <AddButton buttonType={"multipleAnswer"} />
        <AddButton buttonType={"checkbox"} />
        <AddButton buttonType={"dropdown"} />
      </View>
    </View>
  );
};

export default BuilderQuestion;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    gap: 10,
    backgroundColor: COLORS.background,
  },
  addContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
});
