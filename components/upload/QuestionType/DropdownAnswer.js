import SelectDropdown from "react-native-select-dropdown";
import { StyleSheet } from "react-native";

import { FONT, COLORS } from "../../../constants";

export const DropdownAnswer = ({ options, onChange, value }) => {
  const optionValues = options.map((option) => option.value);
  return (
    <SelectDropdown
      data={optionValues}
      onSelect={onChange}
      defaultButtonText={value ? value : "Select an option"}
      buttonStyle={styles.buttonStyle}
      buttonTextStyle={styles.buttonTextStyle}
      rowTextStyle={styles.rowTextStyle}
      rowStyle={styles.rowStyle}
      selectedRowTextStyle={{ color: COLORS.secondary }}
      buttonTextAfterSelection={(selectedItem) => selectedItem}
    />
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: "100%",
    height: 35,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    marginVertical: 15,
  },
  buttonTextStyle: {
    fontFamily: FONT.text,
    fontSize: 14,
    color: COLORS.primaryText,
  },
  rowStyle: {
    height: 40,
  },
  rowTextStyle: {
    fontFamily: FONT.text,
    fontSize: 14,
    color: COLORS.primaryText,
  },
});
