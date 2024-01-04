import { RadioButton } from "react-native-paper";
import { View } from "react-native";

export const MultipleAnswer = ({ options, onChange, value }) => {
  return (
    <RadioButton.Group onValueChange={onChange} value={value}>
      {options.map((option) => (
        <View key={option}>
          <RadioButton.Item label={option} value={option} />
        </View>
      ))}
    </RadioButton.Group>
  );
};
