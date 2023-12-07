import React from "react";
import { View, Text, TextInput } from "react-native";

import styles from "./welcome.style";

const Welcome = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.forminity}>FORMINITY</Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="What are you looking for?"
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
