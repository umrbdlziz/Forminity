import { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, RefreshControl } from "react-native";

import { useSelector } from "react-redux";

import { COLORS, FONT, icons } from "../../../constants";
import { FIREBASE_DB } from "../../firebase/config";
import { doc, collection, getDocs } from "firebase/firestore/lite";

const History = () => {
  const [responseID, setResponseID] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const currentUserId = useSelector((state) => state.uid.value);
  const allForm = useSelector((state) => state.allForm.value);
  const allUsers = useSelector((state) => state.users.value);

  const fetchCards = async () => {
    const responseIds = [];
    setRefreshing(true);

    try {
      for (const userDoc of allUsers) {
        if (userDoc.id == currentUserId) {
          const responseSnapshot = await getDocs(
            collection(FIREBASE_DB, `users/${userDoc.id}/response`)
          );

          for (const response of responseSnapshot.docs) {
            allForm.map((form) => {
              if (form.formId == response.data().formId) {
                const timestamp = response.data().timestamp;

                if (timestamp) {
                  responseIds.push({
                    userName: form.userName,
                    timestamp: `${timestamp.toDate().getFullYear()}-${
                      timestamp.toDate().getMonth() + 1
                    }-${timestamp.toDate().getDate()}`,
                    formId: form.formId,
                    formName: form.formName,
                    formDescription: form.formDescription,
                    formCategory: form.formCategory,
                  });
                } else {
                  console.warn(
                    "Timestamp is undefined for formId:",
                    form.formId
                  );
                }
              }
            });
          }
          break;
        }
      }
    } catch (e) {
      console.error("Error at card container: ", e);
    }

    setResponseID(responseIds);
    setRefreshing(false);
  };

  useEffect(() => {
    fetchCards();
  }, [currentUserId, allUsers]);

  return (
    <View style={styles.container}>
      <FlatList
        data={responseID}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.mainText}>{item.formName}</Text>
            <View style={styles.dateContainer}>
              <Text style={styles.subText}>by {item.userName}</Text>
              <Text style={styles.dateText}>{item.timestamp}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.scrollview}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchCards} />
        }
      />
    </View>
  );
};
export default History;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
  },
  scrollview: {
    gap: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  mainText: {
    fontFamily: FONT.h2,
    fontSize: 16,
    color: COLORS.primaryText,
  },
  subText: {
    fontFamily: FONT.text,
    fontSize: 12,
    color: COLORS.secondaryTextIcon,
  },
  dateText: {
    fontFamily: FONT.h2,
    fontSize: 14,
    color: COLORS.secondaryTextIcon,
  },
  dateContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
});
