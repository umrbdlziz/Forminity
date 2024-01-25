import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useDispatch } from "react-redux";
import {
  setUserId,
  setFormId,
  setName,
  setDescription,
  addCategory,
} from "../../redux/displaySlice";

import { FONT, COLORS } from "../../constants";
import globalStyle from "../../App/general.style";

const Cards = ({ userid, id, title, desc, category }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={[styles.container, globalStyle.shadow]}
      onPress={() => {
        navigation.navigate("FillFormPage");
        dispatch(setUserId(userid));
        dispatch(setFormId(id));
        dispatch(setName(title));
        dispatch(setDescription(desc));
        dispatch(addCategory(category));
      }}
    >
      <Text style={styles.titleContainer}>{title}</Text>
      <Text style={styles.descContainer}>{desc}</Text>
      <View style={styles.secondContainer}>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>{category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Cards;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    width: 350,
    paddingVertical: 20,
    paddingHorizontal: 15,
    gap: 5,
  },
  titleContainer: {
    fontFamily: FONT.h2,
    fontSize: 16,
  },
  descContainer: {
    fontFamily: FONT.subtitle,
    fontSize: 12,
  },
  secondContainer: {
    flexDirection: "row",
    gap: 10,
  },
  qNumContainer: {
    backgroundColor: COLORS.secondaryTextIcon,
    borderRadius: 30,
    paddingVertical: 4,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  qNumText: {
    color: COLORS.primary,
    fontFamily: FONT.text,
    fontSize: 10,
  },
  categoryContainer: {
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 15,
  },
  categoryText: {
    fontFamily: FONT.text,
    fontSize: 10,
    color: COLORS.primary,
  },
});
