import { View, SafeAreaView, Text } from "react-native";

import { COLORS, FONT, SIZES } from "../constants/theme";
import { Welcome } from "../components";

const Home = () => {
  return (
    // safe area view for ios
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Welcome />
    </SafeAreaView>
  );
};

export default Home;
