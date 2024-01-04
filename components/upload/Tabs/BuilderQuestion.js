import { Divider } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";

import { FONT, COLORS } from "../../../constants";
import { AddBtn } from "../Btn";
import RenderForms from "../RenderForms";

const BuilderQuestion = () => {
  return (
    <View style={styles.container}>
      <Divider
        style={{
          paddingVertical: 0.5,
          backgroundColor: COLORS.tertiary,
        }}
      />
      <RenderForms />
      <Divider
        style={{
          paddingVertical: 0.5,
          backgroundColor: COLORS.tertiary,
        }}
      />

      <View style={styles.addContainer}>
        <AddBtn buttonType={"shortAnswer"} />
        <AddBtn buttonType={"multipleAnswer"} />
        <AddBtn buttonType={"checkbox"} />
        <AddBtn buttonType={"dropdown"} />
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
