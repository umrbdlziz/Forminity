import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONT, icons } from "../../../constants";
import globalStyle from "../../../App/general.style";

const Feedback = () => {
  const send = async () => {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.txTitle}>Feedback to FORMINITY:</Text>
        <TextInput style={styles.txInput} multiline={true} autoGrow={true} />
      </View>
      <TouchableOpacity
        style={[globalStyle.Btn, globalStyle.shadow]}
        onPress={send}
      >
        <Text style={globalStyle.textBtn}>SEND</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default Feedback;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    display: "flex",
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  txTitle: {
    fontSize: 16,
    fontFamily: FONT.subtitle,
    fontWeight: "700",
    color: COLORS.primaryText,
  },
  txInput: {
    backgroundColor: COLORS.primary,
    display: "flex",
    width: 330,
    height: 300,
    paddingHorizontal: 15,
    paddingVertical: 12,
    alignItems: "center",
    gap: 10,
    fontFamily: FONT.subtitle,
    borderRadius: 10,
    textAlignVertical: "top",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
});
