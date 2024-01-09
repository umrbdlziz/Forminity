import { Text, View, TextInput, FlatList, StyleSheet } from "react-native";

import { useForm, Controller } from "react-hook-form";
import { useSelector } from "react-redux";

import {
  MultipleAnswer,
  DropdownAnswer,
  CheckboxAnswer,
} from "../QuestionType";

export default function Preview() {
  const { control } = useForm({});

  const currItems = useSelector((state) => state.item);
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
            name={item.title}
          />
        )}
      </>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={currItems}
        renderItem={renderForms}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={true}
        style={styles.container}
        contentContainerStyle={styles.scrollview}
      />
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
