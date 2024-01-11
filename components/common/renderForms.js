import { Text, StyleSheet, TextInput } from "react-native";
import { Controller } from "react-hook-form";

import {
  MultipleAnswer,
  CheckboxAnswer,
  DropdownAnswer,
} from "../upload/QuestionType";
import { COLORS, FONT } from "../../constants";

export const renderForms = (item, control) => {
  return (
    <>
      <Text style={styles.questionTitle}>{item.title}</Text>

      {item.type === "shortAnswer" && (
        <Controller
          control={control}
          name={item.title}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Your answer"
              onChangeText={onChange}
              value={value}
              style={styles.shortAnswer}
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

const styles = StyleSheet.create({
  questionTitle: {
    fontFamily: FONT.h2,
    fontSize: 16,
  },
  shortAnswer: {
    fontFamily: FONT.text,
    fontSize: 14,
    paddingVertical: 10,
    paddingLeft: 15,
  },
});
