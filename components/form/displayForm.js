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
  DropdownAnswer,
  CheckboxAnswer,
} from "../QuestionType";

import { collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrzOY7I1fzL6cCHzQ9xPN5qtjatZDVqcI",
  authDomain: "firstproject-408306.firebaseapp.com",
  projectId: "firstproject-408306",
  storageBucket: "firstproject-408306.appspot.com",
  messagingSenderId: "525543077982",
  appId: "1:525543077982:web:f3a4cc0579cf99cfc4dccf",
  measurementId: "G-YHLJ498C8M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function displayForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };

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
            name={item.title}
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
      {console.log(currForms)}
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
