import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { Cards } from "../home/Cards";
import DATA from "../common/DATA";

const Temp = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <Cards
          title={item.title}
          desc={item.desc}
          qNum={item.qNum}
          category={item.category}
        />
      )}
      style={styles.container}
      contentContainerStyle={styles.scrollview}
    />
  );
};
export default Temp;

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
