import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useSelector, useDispatch } from "react-redux";
import { clearForm } from "../../../redux/formSlice";
import { clearItem } from "../../../redux/itemSlice";
import { nanoid } from "@reduxjs/toolkit";

import { FONT, COLORS } from "../../../constants";

import { FIREBASE_DB, dynamicLinks } from "../../firebase/config";
import { collection, doc, addDoc, setDoc } from "firebase/firestore/lite";

const SaveBtn = () => {
  const navigation = useNavigation();
  const items = useSelector((state) => state.item);
  const forms = useSelector((state) => state.form);
  const uid = useSelector((stete) => stete.uid.value);
  const dispatch = useDispatch();
  const formId = nanoid();

  async function buildLink() {
    const link = await dynamicLinks().buildLink({
      link: `https://forminity.page.link/testing?formId=${formId}`,
      domainUriPrefix: `https://forminity.page.link`,
      android: {
        packageName: "com.fishless.Forminity",
      },
    });

    return link;
  }

  const onCreate = async () => {
    try {
      const link = await buildLink();
      const docRef = await setDoc(
        doc(FIREBASE_DB, `users/${uid}/form`, formId),
        {
          info: forms,
          link: link,
        }
      );
      for (const item of items) {
        if (item.options === undefined) {
          item.options = [];
        }
        await setDoc(
          doc(FIREBASE_DB, `users/${uid}/form/${formId}/item`, item.id),
          item
        );
        dispatch(clearItem());
        dispatch(clearForm());
      }
      // console.log(link);
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
