import React from "react";
import { Divider } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";

import { FONT, COLORS } from "../../constants";
import AddButton from "./AddButton";
import RenderForms from "./RenderForms";

const BuilderQuestion = () => {
  return (
    <View style={{ flex: 1 }}>
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
  },
  scrollview: {
    gap: 40,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  questionContainer: {
    display: "flex",
    gap: 10,
  },
  title: {
    fontFamily: FONT.h2,
    fontSize: 16,
    color: COLORS.primaryText,
  },
  options: {
    paddingHorizontal: 10,
  },
  option: {
    fontFamily: FONT.placeholder,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 5,
  },
  buttonStyle: {
    backgroundColor: COLORS.primary,
    borderWidth: 1.5,
    borderRadius: 10,
    width: 60,
    height: 30,
    justifyContent: "center",
  },
  titleStyle: {
    fontFamily: FONT.btn,
    fontSize: 10,
    textAlign: "center",
  },
  buttonContainerStyle: {
    borderRadius: 10,
    width: 60,
    height: 30,
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
