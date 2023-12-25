import React from "react";
import { Image } from "react-native";
import { StyleSheet, View } from "react-native";

const BottomTabIcon = ({ currentIcon }) => {
  return (
    <View style={styles.container}>
      <Image source={currentIcon} style={styles.icon} />
    </View>
  );
};

export default BottomTabIcon;

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
  container: {
    padding: 25,
  },
});
