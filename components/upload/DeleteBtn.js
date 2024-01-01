import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import { COLORS, FONT } from "../../constants";
import { formDeleted } from "../../redux/formSlice";
import globalStyle from "../../App/general.style";

const DeleteBtn = ({ itemId }) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={[styles.buttonStyle, globalStyle.shadow]}
      onPress={() => dispatch(formDeleted(itemId))}
    >
      <Text style={styles.titleStyle}>delete</Text>
    </TouchableOpacity>
  );
};

export default DeleteBtn;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.err,
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
    color: COLORS.err,
  },
});
