import { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Divider } from "react-native-paper";

import { useSelector } from "react-redux";

import {
  MultipleAnswer,
  CheckboxAnswer,
  DropdownAnswer,
} from "../components/upload/QuestionType";
import { COLORS, FONT } from "../constants";
import globalStyle from "../App/general.style";

import { db } from "../components/firebase/config";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

const FillFormPage = () => {
  const [question, setQuestion] = useState([]);
  const forms = useSelector((state) => state.display);
  const allQuestion = [];
  const { control, handleSubmit } = useForm({});

  useEffect(() => {
    const fetchForms = async () => {
      const querySnapshot = await getDocs(
        collection(db, `users/${forms.userid}/form/${forms.formId}/item`)
      );
      querySnapshot.forEach((doc) => {
        allQuestion.push({
          id: doc.id,
          type: doc.data().type,
          title: doc.data().title,

          options: doc.data().type !== "shortAnswer" ? doc.data().options : {},
        });
      });
      setQuestion(allQuestion);
    };
    fetchForms();
  }, []);

  const renderForms = ({ item }) => {
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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{forms.name}</Text>
      <Text style={styles.description}>{forms.description}</Text>
      <Divider
        style={{
          paddingVertical: 0.5,
          backgroundColor: COLORS.tertiary,
        }}
      />

      <FlatList
        data={question}
        renderItem={renderForms}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="always"
        ListFooterComponent={
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={[globalStyle.Btn, { alignSelf: "center" }]}
          >
            <Text style={globalStyle.textBtn}>SUBMIT</Text>
          </TouchableOpacity>
        }
        contentContainerStyle={styles.flatlistContainer}
      />
    </View>
  );
};

export default FillFormPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    gap: 10,
    backgroundColor: COLORS.background,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  name: {
    fontFamily: FONT.h2,
    fontSize: 30,
  },
  description: {
    fontFamily: FONT.text,
    fontSize: 12,
  },
  flatlistContainer: {
    display: "flex",
    gap: 20,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  btn: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
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
