import { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import { useDispatch } from "react-redux";
import {
  setFormId,
  setName,
  setDescription,
  addCategory,
} from "../../redux/displaySlice";

import Cards from "../../components/home/Cards";
import { FIREBASE_DB } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore/lite";

const CardContainer = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const currentUserId = "userId"; // Replace this with your current user's ID
      try {
        const userSnapshot = await getDocs(collection(FIREBASE_DB, "users"));
        const cardsData = [];

        for (const userDoc of userSnapshot.docs) {
          if (userDoc.id !== currentUserId) {
            const formSnapshot = await getDocs(
              collection(FIREBASE_DB, `users/${userDoc.id}/form`)
            );
            for (const formDoc of formSnapshot.docs) {
              const itemSnapshot = await getDocs(
                collection(
                  FIREBASE_DB,
                  `users/${userDoc.id}/form/${formDoc.id}/item`
                )
              );
              cardsData.push({
                userid: userDoc.id,
                id: formDoc.id,
                name: formDoc.data().info.name,
                number: itemSnapshot.docs.length,
                description: formDoc.data().info.description,
                category: formDoc.data().info.category,
              });
            }
            // formSnapshot.forEach((doc) => {
            // });
          }
        }
        setCards(cardsData);
      } catch (e) {
        console.error("Error at card container: ", e);
      }
    };

    fetchCards();
  }, []);
  return (
    <FlatList
      data={cards}
      renderItem={({ item, index }) => (
        <Cards
          userid={item.userid}
          id={item.id}
          title={item.name}
          desc={item.description}
          qNum={item.number}
          category={item.category}
        />
      )}
      style={styles.container}
      contentContainerStyle={styles.scrollview}
    />
  );
};
export default CardContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview: {
    gap: 20,
    alignItems: "center",
    paddingVertical: 20,
  },
});
