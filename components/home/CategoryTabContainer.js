import React from "react";
import { StyleSheet, FlatList } from "react-native";

import CategoryButton from "../../components/home/CategoryButton";

const CategoryTabContainer = () => {
  const DATA = [
    { id: "1", title: "All" },
    { id: "2", title: "Sport" },
    { id: "3", title: "Psychology" },
    { id: "4", title: "Education" },
    { id: "5", title: "Finance" },
    { id: "6", title: "Health" },
    { id: "7", title: "Technology" },
  ];
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <CategoryButton title={item.title} />}
      style={styles.container}
      contentContainerStyle={styles.scrollviewcontainer}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    />
  );
};
export default CategoryTabContainer;

const styles = StyleSheet.create({
  container: {
    maxHeight: 50,
  },
  scrollviewcontainer: {
    gap: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
