import { CheckBox } from "@rneui/themed";
import { View } from "react-native";

export const CheckboxAnswer = ({ options, onChange, value }) => {
  return (
    <View>
      {options.map((option) => (
        <CheckBox
          key={option}
          title={option}
          checked={value ? value.indexOf(option) !== -1 : false}
          onPress={() => {
            if (value) {
              if (value.indexOf(option) !== -1) {
                onChange(value.filter((v) => v !== option));
              } else {
                onChange([...value, option]);
              }
            } else {
              onChange([option]);
            }
          }}
        />
      ))}
    </View>
  );
};
