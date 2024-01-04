import SelectDropdown from "react-native-select-dropdown";

export const DropdownAnswer = ({ options, onChange, value }) => {
  return (
    <SelectDropdown
      data={options}
      onSelect={onChange}
      defaultButtonText={value ? value : "Select an option"}
      buttonStyle={{
        width: "100%",
        height: 40,
        backgroundColor: "#fafafa",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc",
      }}
      rowTextStyle={{
        fontSize: 16,
        color: "#333",
      }}
      buttonTextAfterSelection={(selectedItem) => selectedItem}
    />
  );
};
