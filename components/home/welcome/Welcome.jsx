import React from "react";
import { View, Text, TextInput } from "react-native";

import styles from "./welcome.style";

const Welcome = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.forminity}>FORMINITY</Text>
      <View>
        <View>
          <TextInput placeholder="What are you looking for?" />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
