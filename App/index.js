import "expo-dev-client";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "../redux/store";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";

import {
  SplashScreen,
  LoginPage,
  UploadPage,
  UploadPage2,
  FillFormPage,
  ResponsesPage,
  SignUpPage,
} from "../screens";
import { HandleDeepLinking } from "../components";
import BottomTabsRoot from "../components/common/BottomTabsRoot";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../components/firebase/config";
import { User } from "firebase/auth";

import { dynamicLinks } from "../components/firebase/config";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(false);
  const [user, setUser] = useState(null);

  const [fontsLoaded, error] = useFonts({
    "Rajdhani-Bold": require("../assets/fonts/Rajdhani-Bold.ttf"),
    "AlegreyaSans-Bold": require("../assets/fonts/AlegreyaSans-Bold.ttf"),
    "Roboto-LightItalic": require("../assets/fonts/Roboto-LightItalic.ttf"),
    "Telex-Regular": require("../assets/fonts/Telex-Regular.ttf"),
    "Allura-Regular": require("../assets/fonts/Allura-Regular.ttf"),
    "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
    "Inter-Light": require("../assets/fonts/Inter-Light.ttf"),
  });

  // const HandleDeepLinking = () => {
  //   const navigate = useNavigation();

  //   const handleDynamicLink = (link) => {
  //     const formId = link.url.split("=").pop();
  //     console.log("Form ID: ", formId);
  //     navigate.navigate("FillFormPage");
  //   };

  //   useEffect(() => {
  //     const unsubscribe = dynamicLinks().onLink((link) => {
  //       handleDynamicLink(link);
  //     });

  //     dynamicLinks()
  //       .getInitialLink()
  //       .then((link) => {
  //         if (link) {
  //           handleDynamicLink(link);
  //         }
  //       });

  //     return () => unsubscribe();
  //   }, []);
  // };

  useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 5000);
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("user", user);
      setUser(user);
    });
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <HandleDeepLinking />
          {hideSplashScreen ? (
            <Stack.Navigator initialRouteName="LoginPage">
              {user ? (
                <>
                  <Stack.Screen
                    name="BottomTabsRoot"
                    component={BottomTabsRoot}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="UploadPage"
                    component={UploadPage}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="UploadPage2"
                    component={UploadPage2}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="FillFormPage"
                    component={FillFormPage}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="ResponsesPage"
                    component={ResponsesPage}
                    options={{ headerTitle: "Responses" }}
                  />
                </>
              ) : (
                <>
                  <Stack.Screen
                    name="LoginPage"
                    component={LoginPage}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="SignUpPage"
                    component={SignUpPage}
                    // options={{ headerShown: false }}
                  />
                </>
              )}
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
