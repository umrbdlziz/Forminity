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
  console.log(allForm[0].formCategory);
  useEffect(() => {
    const fetchCards = async () => {
      try {
        for (const userDoc of allUsers) {
          if (userDoc.id == currentUserId) {
            const responseSnapshot = await getDocs(
              collection(FIREBASE_DB, `users/${userDoc.id}/response`)
            );

            const responseIds = [];
            console.log(responseSnapshot.docs);
            for (const response of responseSnapshot.docs) {
              responseIds.push(response.data());
            }

            setResponseID(responseIds);
            console.log(responseID);
          }
        }
      } catch (e) {
        console.error("Error at card container: ", e);
      }
    };
    fetchCards();
  }, [currentUserId, allUsers]);
  return (
    <View style={styles.container}>
      <FlatList
        data={responseID}
        renderItem={({ item, index }) => (
          <View>
            <Text style={styles.txInfo}>{item.userId}</Text>
            <Text style={styles.txInfo}>{item.formId}</Text>
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
