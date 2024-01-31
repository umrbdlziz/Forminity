import React from "react";
import { View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";

import { BuilderQuestion, Header, InputCreator, Preview } from "../components";
import { COLORS, FONT } from "../constants";

const UploadPage2 = () => {
  const Tab = createMaterialTopTabNavigator();
  const navigation = useNavigation();
  return (
    <View style={styles.uploadPage}>
      <Tab.Navigator
        initialRouteName="Builder"
        screenOptions={{
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: COLORS.primaryText,
          tabBarIndicatorStyle: { backgroundColor: COLORS.secondary },
        }}
      >
        <Tab.Screen name="Input Creator" component={InputCreator} />
        <Tab.Screen name="Builder" component={BuilderQuestion} />
        <Tab.Screen name="Preview" component={Preview} />
      </Tab.Navigator>
    </View>
  );
};
export default UploadPage2;

const styles = StyleSheet.create({
  uploadPage: {
    backgroundColor: COLORS.background,
    flex: 1,
    paddingTop: 40,
  },
  tabBarLabelStyle: {
    fontFamily: FONT.text,
    fontSize: 12,
  },
  tabBarStyle: {
    backgroundColor: COLORS.primary,
    marginBottom: 10,
  },
});
