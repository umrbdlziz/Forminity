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
  const [cards, setCards] = useState([]);
  const currentUserId = useSelector((state) => state.uid.value);
  const allUsers = useSelector((state) => state.users.value);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        for (const userDoc of allUsers) {
          if (userDoc.id == currentUserId) {
            const responseSnapshot = await getDocs(
              collection(FIREBASE_DB, `users/${userDoc.id}/response`)
            );
            for (const response of responseSnapshot.docs) {
              console.log(response.data().userId);
            }
          }
        }
      } catch (e) {
        console.error("Error at card container: ", e);
      }
    };
    fetchCards();
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={cards}
        renderItem={({ item, index }) => (
          <View>{/* <Text style={styles.txInfo}>{item.userid}</Text> */}</View>
        )}
        style={styles.infoContainer}
        contentContainerStyle={styles.scrollview}
      />
    </ScrollView>
  );
};
export default History;

const styles = StyleSheet.create({
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
