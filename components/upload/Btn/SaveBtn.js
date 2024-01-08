import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { FONT, COLORS } from "../../../constants";

import { collection, addDoc } from "firebase/firestore";
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
  const forms = useSelector((state) => state.form);

  const onCreate = async () => {
    console.log(forms);
    try {
      for (const form of forms) {
        if (form.options === undefined) {
          form.options = [];
        }
        const docRef = await addDoc(collection(db, `users/form/item`), form);
        console.log("Document added with ID: ", docRef.id);
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
