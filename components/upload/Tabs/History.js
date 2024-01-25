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
  const uid = useSelector((state) => state.uid.value);
  useEffect(() => {
    const fetchCards = async () => {
      const currentUserId = uid; // Replace this with your current user's ID
      console.log(currentUserId);

      try {
        const userSnapshot = await getDocs(collection(FIREBASE_DB, "users"));
        const cardsData = [];

        for (const userDoc of userSnapshot.docs) {
          if (userDoc.id == currentUserId) {
            const formSnapshot = await getDocs(
              collection(FIREBASE_DB, `users/${userDoc.id}/form/`)
            );
            for (const formDoc of formSnapshot.docs) {
              const itemSnapshot = await getDocs(
                collection(
                  FIREBASE_DB,
                  `users/${userDoc.id}/form/${formDoc.id}/response`
                )
              );

              for (const responseDoc of responseSnapshot.docs) {
                const responseSnapshot = await getDocs(
                  doc(
                    FIREBASE_DB,
                    `users/${userDoc.id}/form/${formDoc.id}/response/${responseDoc.id}`
                  )
                );
                console.log(responseDoc.id);

                // cardsData.push({
                //   userid: userDoc.id,
                //   id: formDoc.id,
                //   name: formDoc.data().info.name,
                //   number: itemSnapshot.docs.length,
                //   description: formDoc.data().info.description,
                //   category: formDoc.data().info.category,
                // });
              }
            }
          }
        }
        setCards(cardsData);
      } catch (e) {
        console.error("Error at card container: ", e);
      }
    };
    if (uid) {
      fetchCards();
    }
  }, [uid]);
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
