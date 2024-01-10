import { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

import { useSelector } from "react-redux";

import {
  MultipleAnswer,
  CheckboxAnswer,
  DropdownAnswer,
} from "../components/upload/QuestionType";

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
        <Text>{item.title}</Text>
        {/* <Text>{JSON.stringify(item.options)}</Text> */}

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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View>
      <Text>{forms.name}</Text>
      <Text>{forms.description}</Text>

      <FlatList
        data={question}
        renderItem={renderForms}
        keyExtractor={(item) => item.id}

        // style={styles.container}
        // contentContainerStyle={styles.scrollview}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default FillFormPage;
