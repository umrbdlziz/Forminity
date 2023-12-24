import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import { CategoryButton } from "../../components";

const CategoryTabContainer = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <CategoryButton title={"All"} />
      <CategoryButton title={"Sport"} />
      <CategoryButton title={"Psychology"} />
      <CategoryButton title={"Education"} />
      <CategoryButton title={"Finance"} />
      <CategoryButton title={"Health"} />
      <CategoryButton title={"Technology"} />
    </ScrollView>
  );
};
export default CategoryTabContainer;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
