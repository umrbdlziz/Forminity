import { useFonts } from "expo-font";

const Layout = () => {
  const [fontsLoaded, error] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-LightItalic": require("./assets/fonts/Roboto-LightItalic.ttf"),
    "Telex-Regular": require("./assets/fonts/Telex-Regular.ttf"),
    "AlegreyaSans-Bold": require("./assets/fonts/AlegreyaSans-Bold.ttf"),
    "Rajdhani-Bold": require("./assets/fonts/Rajdhani-Bold.ttf"),
    "Allura-Regular": require("./assets/fonts/Allura-Regular.ttf"),
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }
};

export default Layout;
