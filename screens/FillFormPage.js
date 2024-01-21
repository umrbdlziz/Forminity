import { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useForm } from "react-hook-form";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { COLORS, FONT } from "../constants";
import globalStyle from "../App/general.style";
import { renderForms } from "../components/common/renderForms";

import { FIREBASE_DB } from "../components/firebase/config";
import { doc, addDoc, collection, getDocs } from "firebase/firestore/lite";

const FillFormPage = () => {
  const [question, setQuestion] = useState([]);
  const forms = useSelector((state) => state.display);
  const allQuestion = [];
  const { control, handleSubmit } = useForm({});
  const navigation = useNavigation();

  useEffect(() => {
    const fetchForms = async () => {
      const querySnapshot = await getDocs(
        collection(
          FIREBASE_DB,
          `users/${forms.userid}/form/${forms.formId}/item`
        )
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

  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(
        collection(
          FIREBASE_DB,
          `users/${forms.userid}/form/${forms.formId}/response`
        ),
        {
          userId: forms.userid,
          answer: data,
        }
      );
      console.log("Document written with ID: ", docRef.id);
      console.log(forms.userid + "=>" + data);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    navigation.navigate("HomePage");
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
        renderItem={({ item, index }) => renderForms(item, control, index)}
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
});
