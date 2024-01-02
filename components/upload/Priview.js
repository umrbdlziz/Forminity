import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { useForm, Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import { RadioButton } from "react-native-paper";
import { CheckBox } from "@rneui/themed";

const CheckboxAnswer = ({ options, onChange, value }) => {
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

const MultipleAnswer = ({ options, onChange, value }) => {
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

const DropdownAnswer = ({ options, onChange, value }) => {
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

export default function Priview() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const onSubmit = (data) => console.log(data);
  const currForms = useSelector((state) => state.form);
  const renderForms = ({ item }) => {
    return (
      <>
        <Text>{item.title}</Text>

        {item.type === "shortAnswer" && (
          <Controller
            control={control}
            name={item.title}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="First name"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
        )}

        {item.type === "multipleAnswer" && (
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <MultipleAnswer
                options={item.options}
                onChange={onChange}
                value={value}
              />
            )}
            name={item.title}
          />
        )}

        {item.type === "checkbox" && (
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <CheckboxAnswer
                options={item.options}
                onChange={onChange}
                value={value}
              />
            )}
            name={item.title}
          />
        )}

        {item.type === "dropdown" && (
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <DropdownAnswer
                options={item.options}
                onChange={onChange}
                value={value}
              />
            )}
            name={item.id}
          />
        )}
      </>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={currForms}
        renderItem={renderForms}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={true}
        style={styles.container}
        contentContainerStyle={styles.scrollview}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  scrollview: {
    gap: 40,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
});
