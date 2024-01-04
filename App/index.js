import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "../redux/store";

import { useEffect, useState } from "react";
import { useFonts } from "expo-font";

import { SplashScreen, LoginPage, UploadPage } from "../screens";
import BottomTabsRoot from "../components/common/BottomTabsRoot";

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
    "Inter-Light": require("../assets/fonts/Inter-Light.ttf"),
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
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="LoginPage"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="LoginPage" component={LoginPage} />
              <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
              <Stack.Screen name="UploadPage" component={UploadPage} />
            </Stack.Navigator>
          ) : (
            <SplashScreen />
          )}
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
