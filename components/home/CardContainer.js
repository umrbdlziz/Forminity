import { useEffect, useState, useCallback } from "react";
import { StyleSheet, FlatList, RefreshControl } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { SET_USERS, CLEAR_USERS } from "../../redux/usersSlice";
import { SET_ALLFORM, CLEAR_ALLFORM } from "../../redux/allFormSlice";
import {
  setusername,
  setfullName,
  setpassword,
  setemail,
  setmatric,
  setdesasiswa,
  setschool,
  setmycsd,
  setpoint,
} from "../../redux/userDataSlice";

import Cards from "../../components/home/Cards";
import { FIREBASE_DB } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore/lite";
import { set } from "react-hook-form";

const CardContainer = ({ searchTerm }) => {
  const [cards, setCards] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const uid = useSelector((state) => state.uid.value);
  const dispatch = useDispatch();

  const fetchCards = async () => {
    const currentUserId = uid; // Replace this with your current user's ID
    dispatch(CLEAR_ALLFORM());
    dispatch(CLEAR_USERS());

    try {
      const cardsData = [];
      const userSnapshot = await getDocs(collection(FIREBASE_DB, "users"));

      for (const userDoc of userSnapshot.docs) {
        dispatch(SET_USERS({ id: userDoc.id, data: userDoc.data() }));

        if (userDoc.id === currentUserId) {
          dispatch(setfullName(userDoc.data().fullName));
          dispatch(setusername(userDoc.data().username));
          dispatch(setpassword(userDoc.data().password));
          dispatch(setemail(userDoc.data().email));
          dispatch(setmatric(userDoc.data().matric));
          dispatch(setschool(userDoc.data().school));
          dispatch(setdesasiswa(userDoc.data().desasiswa));
          dispatch(setpoint(userDoc.data().point));
          dispatch(setmycsd(userDoc.data().mycsd));
        }

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
    setRefreshing(false);
  };

  useEffect(() => {
    fetchCards();
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
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={fetchCards} />
      }
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
