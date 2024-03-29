import { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Overlay } from "@rneui/themed";

import { useSelector } from "react-redux";

import { COLORS, FONT, icons } from "../../../constants";

import { doc, deleteDoc } from "firebase/firestore/lite";
import { FIREBASE_DB } from "../../firebase/config";

const CreatedCard = ({ item }) => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const uid = useSelector((state) => state.uid.value);

  const onDelete = async () => {
    try {
      const formRef = doc(FIREBASE_DB, `users/${uid}/form`, item.formID);
      await deleteDoc(formRef);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View key={item.formID} style={styles.displayCard}>
      <View style={styles.topDisplayCard}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {item.title}
        </Text>
        <View style={styles.badge}>
          <Text
            style={styles.badgeText}
            onPress={() => {
              setVisible(true);
            }}
          >
            Copy Link
          </Text>
        </View>
      </View>

      <View style={styles.completeDisplay}>
        <Image source={icons.complete} style={styles.img} />
        <Text>{item.number}</Text>
      </View>
      <View style={styles.desc}>
        <Text style={styles.descText} numberOfLines={3} ellipsizeMode="tail">
          {item.desc}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.navigate("ResponsesPage", { formId: item.formID })
        }
      >
        <Text style={styles.btnText}>View Submission</Text>
        <Image style={styles.btnImg} source={icons.rightArrow} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteBtn} onPress={onDelete}>
        <Text style={styles.deleteBtnText}>Delete</Text>
      </TouchableOpacity>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={styles.overlayContainer}
      >
        <TouchableOpacity onPress={toggleOverlay} style={styles.imgContainer}>
          <Image source={icons.close} style={styles.img} />
        </TouchableOpacity>
        <Text style={styles.title}>Survey link</Text>
        <Text style={styles.desc} selectable={true}>
          {item.link}
        </Text>
      </Overlay>
    </View>
  );
};

export default CreatedCard;

const styles = StyleSheet.create({
  displayCard: {
    display: "flex",
    width: 300,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: COLORS.secondaryTextIcon,
  },
  topDisplayCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: FONT.h2,
    fontSize: 16,
    color: COLORS.primaryText,
    width: 190,
  },
  badge: {
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    justifyContent: "center",
    padding: 5,
  },
  badgeText: {
    fontFamily: FONT.btn,
    fontSize: 10,
    color: COLORS.primary,
  },
  time: {
    fontFamily: FONT.subtitle,
    fontSize: 14,
    color: COLORS.secondaryTextIcon,
  },
  completeDisplay: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 3,
    paddingRight: 5,
  },
  img: {
    width: 15,
    height: 15,
    padding: 20,
  },
  desc: {
    height: 60,
    display: "flex",
    justifyContent: "flex-end",
  },
  descText: {
    fontFamily: FONT.text,
    fontSize: 12,
    color: COLORS.secondaryTextIcon,
    marginBottom: 5,
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    gap: 10,
    borderRadius: 10,
    borderColor: COLORS.secondaryTextIcon,
    borderWidth: 0.2,
    paddingVertical: 5,
  },
  btnText: {
    fontFamily: FONT.text,
    fontSize: 14,
    color: COLORS.primaryText,
  },
  btnImg: {
    width: 15,
    height: 15,
  },
  deleteBtn: {
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    borderColor: COLORS.err,
    borderWidth: 0.2,
    paddingVertical: 5,
  },
  deleteBtnText: {
    fontFamily: FONT.text,
    fontSize: 14,
    color: COLORS.err,
  },
  overlayContainer: {
    display: "flex",
    padding: 20,
  },
  imgContainer: {
    display: "flex",
    alignItems: "flex-end",
  },
  img: {
    width: 15,
    height: 15,
  },
  title: {
    fontFamily: FONT.h2,
    fontSize: 18,
    color: COLORS.primaryText,
  },
  desc: {
    fontFamily: FONT.subtitle,
    fontSize: 12,
    color: COLORS.secondaryTextIcon,
    paddingBottom: 20,
  },
});
