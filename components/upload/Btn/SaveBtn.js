import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { clearForm } from "../../../redux/formSlice";
import { clearItem } from "../../../redux/itemSlice";

import { FONT, COLORS } from "../../../constants";

import { db } from "../../firebase/config";
import { collection, doc, addDoc, setDoc } from "firebase/firestore";

const SaveBtn = () => {
  const navigation = useNavigation();
  const items = useSelector((state) => state.item);
  const forms = useSelector((state) => state.form);
  const dispatch = useDispatch();

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
