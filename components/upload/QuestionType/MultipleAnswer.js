import { RadioButton } from "react-native-paper";
import { View, StyleSheet } from "react-native";

import { FONT, COLORS } from "../../../constants";

export const MultipleAnswer = ({ options, onChange, value }) => {
  return (
    <RadioButton.Group onValueChange={onChange} value={value}>
      {options.map((option) => (
        <View key={option.value}>
          <RadioButton.Item
            color={COLORS.secondary}
            style={styles.radioButton}
            label={option.value}
            labelStyle={styles.labelStyle}
            value={option.value}
          />
        </View>
      ))}
    </RadioButton.Group>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontFamily: FONT.text,
    fontSize: 14,
  },
  radioButton: {
    height: 40,
  },
});
