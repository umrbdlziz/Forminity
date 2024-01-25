import React from "react";
import { View, StyleSheet } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Header, UpdateProfile, History, Feedback } from "../components";
import { COLORS, FONT } from "../constants";

const ProfilePage = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.profilePage}>
      <Header headerText={"PROFILE"} />

      <Tab.Navigator
        initialRouteName="Update Profile"
        screenOptions={{
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: COLORS.primaryText,
          tabBarIndicatorStyle: { backgroundColor: COLORS.secondary },
        }}
      >
        <Tab.Screen name="Update Profile" component={UpdateProfile} />
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Feedback" component={Feedback} />
      </Tab.Navigator>
    </View>
  );
};
export default ProfilePage;

const styles = StyleSheet.create({
  profilePage: {
    backgroundColor: COLORS.background,
    flex: 1,
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
