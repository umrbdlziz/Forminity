import { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, RefreshControl } from "react-native";

import { useSelector } from "react-redux";

import { COLORS, FONT, icons } from "../../../constants";
import { FIREBASE_DB } from "../../firebase/config";
import { doc, collection, getDocs } from "firebase/firestore/lite";
import { set } from "react-hook-form";

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
                    userId: response.data().userId,
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
            <Text style={styles.txInfo}>{item.formName}</Text>
            <Text style={styles.txInfo}>{item.timestamp}</Text>
          </View>
        )}
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchCards} />
        }
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
