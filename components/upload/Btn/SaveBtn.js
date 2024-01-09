import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { clearForm } from "../../../redux/formSlice";
import { clearItem } from "../../../redux/itemSlice";
import { nanoid } from "@reduxjs/toolkit";

import { FONT, COLORS } from "../../../constants";

import { collection, doc, addDoc, setDoc } from "firebase/firestore";
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

const SaveBtn = () => {
  const navigation = useNavigation();
  const items = useSelector((state) => state.item);
  const forms = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const formId = nanoid();

  const onCreate = async () => {
    try {
      const docRef = await addDoc(collection(db, "users/userId/form"), {
        info: forms,
      });
      for (const item of items) {
        if (item.options === undefined) {
          item.options = [];
        }
        await setDoc(
          doc(db, `users/userId/form/${docRef.id}/item`, item.id),
          item
        );
        //   const docRef = await setDoc(
        //     doc(db, `users/userId/form/${docRef1.id}/item`, item.id),
        //     item
        //   );
        //   console.log("Document added with ID: ", docRef);
        dispatch(clearItem());
        dispatch(clearForm());
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("BottomTabsRoot", { screen: "UploadPage" });
        onCreate();
      }}
    >
      <Text style={styles.text}>save</Text>
    </TouchableOpacity>
  );
};

export default SaveBtn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    paddingVertical: 5,
  },
  text: {
    color: COLORS.primary,
    fontFamily: FONT.btn,
  },
});
