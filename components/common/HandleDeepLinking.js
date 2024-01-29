import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { dynamicLinks, FIREBASE_DB } from "../firebase/config";
import { useSelector, useDispatch } from "react-redux";
import {
  setUserId,
  setFormId,
  setName,
  setDescription,
  addCategory,
} from "../../redux/displaySlice";
import { doc, getDoc } from "firebase/firestore/lite";

const HandleDeepLinking = () => {
  const navigate = useNavigation();
  const uid = useSelector((state) => state.uid.value);
  const dispatch = useDispatch();

  const handleDynamicLink = async (link) => {
    const formId = link.url.split("=").pop();
    console.log("Form ID: ", formId);
    try {
      const formRef = await getDoc(
        doc(FIREBASE_DB, `users/${uid}/form`, formId)
      );

      dispatch(setUserId(uid));
      dispatch(setFormId(formRef.id));
      dispatch(setName(formRef.data().info.name));
      dispatch(setDescription(formRef.data().info.description));
      dispatch(addCategory(formRef.data().info.category));

      navigate.navigate("FillFormPage");
    } catch (e) {
      console.error("Error handle deep linking: ", e);
    }
  };

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink((link) => {
      handleDynamicLink(link);
    });

    dynamicLinks()
      .getInitialLink()
      .then((link) => {
        if (link) {
          handleDynamicLink(link);
        }
      });

    return () => unsubscribe();
  }, []);
};

export default HandleDeepLinking;
