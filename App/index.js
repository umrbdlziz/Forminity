import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";

import { HomePage, SplashScreen, LoginPage } from "../screens";
import BottomTabsRoot from "./bottomTab";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(false);

  const [fontsLoaded, error] = useFonts({
    "Rajdhani-Bold": require("../assets/fonts/Rajdhani-Bold.ttf"),
    "AlegreyaSans-Bold": require("../assets/fonts/AlegreyaSans-Bold.ttf"),
    "Roboto-LightItalic": require("../assets/fonts/Roboto-LightItalic.ttf"),
    "Telex-Regular": require("../assets/fonts/Telex-Regular.ttf"),
    "Allura-Regular": require("../assets/fonts/Allura-Regular.ttf"),
    "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });
  useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 5000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="LoginPage"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};

export default App;
