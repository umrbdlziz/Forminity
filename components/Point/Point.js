import { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import globalStyle from "../../App/general.style";
import { FONT, COLORS } from "../../constants";
import { FIREBASE_DB } from "../firebase/config";

import { updateDoc, doc, setDoc } from "firebase/firestore/lite";

import { useSelector } from "react-redux";

const PointCard = ({ point, mycsd }) => {
  const uid = useSelector((state) => state.uid.value);
  const userData = useSelector((state) => state.userData);

  const onExchange = async ({ point }) => {
    if (userData.point > point) {
      try {
        await updateDoc(doc(FIREBASE_DB, `users`, uid), {
          point: userData.point - point,
          mycsd: userData.mycsd + mycsd,
        });
        alert(
          `MyCSD updated: ${point}                  MYCSD point will be credited at the end of the semester in your Campus Online.`
        );
        console.log(point);
      } catch (e) {
        console.error("Error exchange point: ", e);
      }
    } else {
      alert("Your current point is insufficient");
    }
  };

  return (
    <TouchableOpacity
      style={[styles.pointCard, globalStyle.shadow]}
      onPress={() => onExchange({ point })}
    >
      <Text style={styles.pointText}>MYCSD</Text>
      <Text style={styles.pointDescription}>
        {point} Points converted into {mycsd} MYCSD
      </Text>
    </TouchableOpacity>
  );
};
export default PointCard;

const styles = StyleSheet.create({
  pointCard: {
    alignItems: "left",
    backgroundColor: COLORS.background,
    borderRadius: 25,
    display: "flex",
    gap: 11,
    padding: 10,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  pointText: {
    color: COLORS.white,
    fontFamily: FONT.h2,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
    paddingLeft: 20,
  },
  pointDescription: {
    color: COLORS.tertiary,
    fontFamily: FONT.h2,
    fontSize: 16,
    marginBottom: 10,
    paddingLeft: 20,
  },
});
