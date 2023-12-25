import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable, StyleSheet, View } from "react-native";
import { useState } from "react";

import { COLORS, icons } from "../../constants";
import {
  HomePage,
  LeaderboardPage,
  PointPage,
  ProfilePage,
  UploadPage,
} from "../../screens";
import BottomTabIcon from "./BottomTabIcon";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [BottomTabItemsNormal] = useState([
    <BottomTabIcon currentIcon={icons.offHome} />,
    <BottomTabIcon currentIcon={icons.offLeaderboard} />,
    <BottomTabIcon currentIcon={icons.offUpload} />,
    <BottomTabIcon currentIcon={icons.offPoint} />,
    <BottomTabIcon currentIcon={icons.offProfile} />,
  ]);
  const [bottomTabItemsActive] = useState([
    <BottomTabIcon currentIcon={icons.onHome} />,
    <BottomTabIcon currentIcon={icons.onLeaderboard} />,
    <BottomTabIcon currentIcon={icons.onUpload} />,
    <BottomTabIcon currentIcon={icons.onPoint} />,
    <BottomTabIcon currentIcon={icons.onProfile} />,
  ]);
  return (
    <Tab.Navigator
      tabBarHideOnKeyboard={true}
      tabBar={({ state, description, navigation }) => {
        const activeIndex = state.index;
        return (
          <View style={style.navStyle}>
            {BottomTabItemsNormal.map((item, index) => {
              // const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="LeaderboardPage"
        component={LeaderboardPage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="UploadPage"
        component={UploadPage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="PointPage"
        component={PointPage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabsRoot;

const style = StyleSheet.create({
  navStyle: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.secondaryTextIcon,
    height: 45,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
