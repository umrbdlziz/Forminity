import { CheckBox } from "@rneui/themed";
import { View, StyleSheet } from "react-native";

import { FONT, COLORS } from "../../../constants";

export const CheckboxAnswer = ({ options, onChange, value }) => {
  return (
    <View>
      {options.map((option) => (
        <CheckBox
          key={option.value}
          title={option.value}
          checked={value ? value.indexOf(option.value) !== -1 : false}
          onPress={() => {
            if (value) {
              if (value.indexOf(option.value) !== -1) {
                onChange(value.filter((v) => v !== option.value));
              } else {
                onChange([...value, option.value]);
              }
            } else {
              onChange([option.value]);
            }
          }}
          containerStyle={styles.containerStyle}
          checkedColor={COLORS.secondary}
          textStyle={styles.textStyle}
          size={20}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: COLORS.background,
    height: 35,
    padding: 0,
    justifyContent: "center",
    paddingLeft: 10,
  },
  textStyle: {
    fontFamily: FONT.text,
    fontSize: 14,
    fontWeight: "600",
  },
});
