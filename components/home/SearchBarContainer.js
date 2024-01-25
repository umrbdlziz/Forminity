import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import { COLORS, FONT, icons } from "../../constants";

const SearchBarContainer = ({ setSearchTerm }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.searchBar}>
      <View style={styles.textInput}>
        <TextInput
          style={styles.text}
          onChangeText={(text) => setSearchTerm(text)}
          placeholder="What are you looking for?"
        />
      </View>
      <TouchableOpacity onPress={() => Keyboard.dismiss()}>
        <Image source={icons.search} style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
  );
};
export default SearchBarContainer;

const styles = StyleSheet.create({
  searchBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 30,
    gap: 20,
  },
  textInput: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    textAlign: "left",
  },
  text: {
    color: COLORS.secondaryTextIcon,
    fontFamily: FONT.subtitle,
    width: 198,
  },
  searchIcon: {
    width: 32,
    height: 32,
  },
});
