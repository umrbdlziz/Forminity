import { View, SafeAreaView, Text } from "react-native";

import { COLORS, FONT, SIZES } from "../constants/theme";
import { Welcome } from "../components";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Welcome />
    </SafeAreaView>
  );
};

export default Home;
