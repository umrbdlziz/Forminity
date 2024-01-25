import { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { SET_USERS } from "../../redux/usersSlice";
import { SET_ALLFORM } from "../../redux/allFormSlice";

import Cards from "../../components/home/Cards";
import { FIREBASE_DB } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore/lite";

const CardContainer = ({ searchTerm }) => {
  const [cards, setCards] = useState([]);
  const uid = useSelector((state) => state.uid.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCards = async () => {
      const currentUserId = uid; // Replace this with your current user's ID

      try {
        const userSnapshot = await getDocs(collection(FIREBASE_DB, "users"));
        const cardsData = [];

        for (const userDoc of userSnapshot.docs) {
          dispatch(SET_USERS({ id: userDoc.id, data: userDoc.data() }));

          const formSnapshot = await getDocs(
            collection(FIREBASE_DB, `users/${userDoc.id}/form`)
          );
          for (const formDoc of formSnapshot.docs) {
            dispatch(
              SET_ALLFORM({
                id: formDoc.id,
                name: formDoc.data().info.name,
                description: formDoc.data().info.description,
                category: formDoc.data().info.category,
              })
            );
            if (userDoc.id !== currentUserId) {
              cardsData.push({
                userid: userDoc.id,
                id: formDoc.id,
                name: formDoc.data().info.name,
                description: formDoc.data().info.description,
                category: formDoc.data().info.category,
              });
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

  const filteredForms = cards.filter((form) =>
    form.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <FlatList
      data={filteredForms}
      renderItem={({ item, index }) => (
        <Cards
          userid={item.userid}
          id={item.id}
          title={item.name}
          desc={item.description}
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
