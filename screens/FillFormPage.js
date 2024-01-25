import { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { set, useForm } from "react-hook-form";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { useSelector } from "react-redux";

import { COLORS, FONT } from "../constants";
import globalStyle from "../App/general.style";
import { renderForms } from "../components/common/renderForms";

import { FIREBASE_DB } from "../components/firebase/config";
import {
  doc,
  addDoc,
  collection,
  getDocs,
  getDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore/lite";

const FillFormPage = () => {
  const [question, setQuestion] = useState([]);
  const forms = useSelector((state) => state.display);
  const currentUserId = useSelector((state) => state.uid.value);
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
      await addDoc(
        collection(
          FIREBASE_DB,
          `users/${forms.userid}/form/${forms.formId}/respondent`
        ),
        {
          userId: forms.userid,
          answer: data,
          timestamp: serverTimestamp(),
        }
      );
      await addDoc(collection(FIREBASE_DB, `users/${currentUserId}/response`), {
        formId: forms.formId,
        userId: forms.userid,
        timestamp: serverTimestamp(),
      });
      const userSnap = await getDoc(doc(FIREBASE_DB, `users`, currentUserId));
      const currentPoints = userSnap.data().point;

      await updateDoc(doc(FIREBASE_DB, `users`, currentUserId), {
        point: currentPoints + 1,
      });
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
