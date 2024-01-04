import { useSelector } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

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

const CreateBtn = () => {
  const forms = useSelector((state) => state.form);

  const onCreate = async () => {
    try {
      for (const form of forms) {
        const docRef = await addDoc(collection(db, "users/forms/items"), form);
        console.log("Document added with ID: ", docRef.id);
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <TouchableOpacity onPress={() => onCreate()}>
      <Text>Create</Text>
    </TouchableOpacity>
  );
};

export default CreateBtn;
