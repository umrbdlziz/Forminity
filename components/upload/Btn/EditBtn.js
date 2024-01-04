import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONT } from "../../../constants";
import globalStyle from "../../../App/general.style";

const EditBtn = ({ type, id, title, options }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.buttonStyle, globalStyle.shadow]}
      onPress={() =>
        navigation.navigate("UploadPage", {
          screen: "Input Creator",
          params: { type: type, id: id, title: title, options: options },
        })
      }
    >
      <Text style={styles.titleStyle}>edit</Text>
    </TouchableOpacity>
  );
};

export default EditBtn;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.secondaryTextIcon,
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
    color: COLORS.secondaryTextIcon,
  },
});
