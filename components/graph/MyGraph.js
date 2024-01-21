import { View, Text, StyleSheet } from "react-native";
import { PieChart } from "react-native-gifted-charts";

import { COLORS, FONT } from "../../constants";

const MyGraph = ({ optionCounts, options }) => {
  return (
    <View style={styles.container}>
      <PieChart
        data={optionCounts}
        title="Option Counts"
        showValuesAsLabels
        showText
        textColor="black"
        radius={80}
        focusOnPress
      />
      <View style={styles.lable}>
        {optionCounts.map((item, index) => {
          const option = options[index];
          return renderLegend(option.value, item.color);
        })}
      </View>
    </View>
  );
};

const renderLegend = (text, color) => {
  return (
    <View key={text} style={{ flexDirection: "row", marginBottom: 12 }}>
      <View
        style={{
          height: 18,
          width: 18,
          marginRight: 10,
          borderRadius: 4,
          backgroundColor: color || "white",
        }}
      />
      <Text
        style={{
          color: COLORS.primaryText,
          fontSize: 14,
          fontFamily: FONT.text,
        }}
      >
        {text || ""}
      </Text>
    </View>
  );
};

export default MyGraph;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  lable: {
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
