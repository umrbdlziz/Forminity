import React from "react";
import { Image } from "react-native";
import { StyleSheet, View } from "react-native";

const BottomTabIcon = ({ currentIcon }) => {
  return (
    <View style={styles.icon}>
      <Image source={currentIcon} />
    </View>
  );
};

export default BottomTabIcon;

const styles = StyleSheet.create({
  icon: {},
});
