import { RadioButton } from "react-native-paper";
import { View } from "react-native";

export const MultipleAnswer = ({ options, onChange, value }) => {
  return (
    <RadioButton.Group onValueChange={onChange} value={value}>
      {options.map((option) => (
        <View key={option.value}>
          <RadioButton.Item label={option.value} value={option.value} />
        </View>
      ))}
    </RadioButton.Group>
  );
};
