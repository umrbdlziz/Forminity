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
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const CardContainer = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const currentUserId = "userId"; // Replace this with your current user's ID
      const userSnapshot = await getDocs(collection(db, "users"));
      const cardsData = [];

      for (const userDoc of userSnapshot.docs) {
        if (userDoc.id !== currentUserId) {
          const formSnapshot = await getDocs(
            collection(db, `users/${userDoc.id}/form`)
          );
          formSnapshot.forEach((doc) => {
            cardsData.push({
              userid: userDoc.id,
              id: doc.id,
              name: doc.data().info.name,
              number: 4,
              description: doc.data().info.description,
              category: doc.data().info.category,
            });
          });
        }
      }

      setCards(cardsData);
    };

    fetchCards();
  }, []);
  return (
    <FlatList
      data={cards}
      renderItem={({ item }) => (
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
