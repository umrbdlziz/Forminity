import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";

import { formAdded } from "../../../redux/formSlice";
import { COLORS, FONT } from "../../../constants";
import globalStyle from "../../../App/general.style";

const AddButton = ({ buttonType }) => {
  const dispatch = useDispatch();

  return (
    <View>
      {buttonType === "shortAnswer" ? (
        <TouchableOpacity
          style={[styles.addBtnContainer, globalStyle.shadow]}
          onPress={() => dispatch(formAdded(buttonType, "What your Question?"))}
        >
          <Text style={styles.addBtn}>SHORT ANSWER</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.addBtnContainer, globalStyle.shadow]}
          onPress={() =>
            dispatch(
              formAdded(buttonType, "What your Question", [
                "option1",
                "option2",
                "option3",
              ])
            )
          }
        >
          {buttonType === "multipleAnswer" ? (
            <Text style={styles.addBtn}>MULTIPLE ANSWER</Text>
          ) : buttonType === "checkbox" ? (
            <Text style={styles.addBtn}>CHECKBOX</Text>
          ) : (
            <Text style={styles.addBtn}>DROP DOWN</Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  addBtnContainer: {
    height: 40,
    width: 80,
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    borderColor: COLORS.secondary,
    borderWidth: 1,
  },
  addBtn: {
    color: COLORS.secondary,
    fontFamily: FONT.btn,
    fontWeight: "600",
    textAlign: "center",
    fontSize: 10,
  },
});
