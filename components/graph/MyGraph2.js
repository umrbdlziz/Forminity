import { View, Text, StyleSheet } from "react-native";
import { BarChart } from "react-native-gifted-charts";

import { COLORS, FONT } from "../../constants";

const MyGraph2 = ({ optionCounts, options }) => {
  return (
    <View style={styles.container}>
      <View
        style={{ paddingBottom: 30, height: optionCounts.length * 50 + 100 }}
      >
        <BarChart
          data={optionCounts}
          //   stepValue={2}
          noOfSections={3}
          maxValue={6}
          //   spacing={40}
          //   height={300}
          //   barWidth={40}
          yAxisThickness={1}
          xAxisThickness={1}
          horizontal
        />
      </View>
      <View style={styles.lable}>
        {optionCounts.map((item, index) => {
          const option = options[index];
          return renderLegend(option.value, item.frontColor);
        })}
      </View>
    </View>
  );
};

const renderLegend = (text, color) => {
  return (
    <View
      key={text}
      style={{
        flexDirection: "row",
        marginBottom: 12,
        width: 200,
        paddingHorizontal: 20,
      }}
    >
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

export default MyGraph2;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  lable: {
    justifyContent: "center",
    // paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
