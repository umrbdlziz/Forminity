import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TextInput, StyleSheet, Image } from "react-native";

import { COLORS, FONT, icons } from "../../constants";

const SearchBarContainer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.searchBar}>
      <View style={styles.textInput}>
        <TextInput
          style={styles.text}
          onChangeText={() => navigation.navigate("LoginPage")}
          placeholder="What are you looking for?"
        />
      </View>
      <Image source={icons.search} style={styles.searchIcon} />
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
