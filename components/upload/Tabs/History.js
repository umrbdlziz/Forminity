import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { useSelector } from "react-redux";

import globalStyle from "../../../App/general.style";

import { COLORS, FONT, icons } from "../../../constants";
import { FIREBASE_DB } from "../../firebase/config";
import { doc, collection, getDocs } from "firebase/firestore/lite";

const History = () => {
  const [responseID, setResponseID] = useState([]);

  const currentUserId = useSelector((state) => state.uid.value);
  const allForm = useSelector((state) => state.allForm.value);
  const allUsers = useSelector((state) => state.users.value);

  useEffect(() => {
    const responseIds = [];
    const fetchCards = async () => {
      try {
        for (const userDoc of allUsers) {
          if (userDoc.id == currentUserId) {
            const responseSnapshot = await getDocs(
              collection(FIREBASE_DB, `users/${userDoc.id}/response`)
            );

            for (const response of responseSnapshot.docs) {
              allForm.map((form) => {
                form.formId == response.data().formId
                  ? responseIds.push({
                      userId: response.data().userId,
                      timestamp: `${response
                        .data()
                        .timestamp.toDate()
                        .getFullYear()}-${
                        response.data().timestamp.toDate().getMonth() + 1
                      }-${response.data().timestamp.toDate().getDate()}`,
                      formId: form.formId,
                      formName: form.formName,
                      formDescription: form.formDescription,
                      formCategory: form.formCategory,
                    })
                  : null;
              });
            }
          }
        }
      } catch (e) {
        console.error("Error at card container: ", e);
      }
      setResponseID(responseIds);
    };
    fetchCards();
  }, [currentUserId, allUsers]);

  return (
    <View style={styles.container}>
      <FlatList
        data={responseID}
        renderItem={({ item, index }) => (
          <View>
            <Text style={styles.txInfo}>{item.formName}</Text>
            <Text style={styles.txInfo}>{item.timestamp}</Text>
          </View>
        )}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};
export default History;

const styles = StyleSheet.create({
  txInfo: {
    fontSize: 13,
    fontFamily: FONT.subtitle,
    fontWeight: "700",
    color: COLORS.primaryText,
  },
  container: {
    backgroundColor: COLORS.background,

    display: "flex",
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  infoContainer: {
    backgroundColor: COLORS.primary,
    width: 330,
    borderRadius: 20,
    display: "inline-flex",
    flexDirection: "column",
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    position: "relative",
  },
  scrollview: {
    gap: 20,
    alignItems: "center",
    paddingVertical: 20,
  },
});
