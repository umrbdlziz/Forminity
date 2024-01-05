import { CheckBox } from "@rneui/themed";
import { View } from "react-native";

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
        />
      ))}
    </View>
  );
};
