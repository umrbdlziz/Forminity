import { Text, StyleSheet, View } from "react-native";

import { COLORS, FONT } from "../../constants";
import MyGraph from "../graph/MyGraph";

//responseData id, answer, responder for answer
//item id, type, title, options for question
export const RenderResponse = ({ item, responseData }) => {
  const responseAnswer = responseData.map((answer) => answer.answer[item.id]);
  const colors = [
    "#FFA5BA",
    "#a3c6f8",
    "#B6E2D4",
    "#F8D5A3",
    "#F5B7B1",
    "#BDB2FA",
    "#baffa5",
  ];

  if (item.type === "shortAnswer") {
    return (
      <View style={styles.constainer}>
        <Text style={styles.questionTitle}>{item.title}</Text>
        {responseData.map((response, index) => (
          <Text key={index} style={styles.shortAnswer}>
            {index + 1}
            {". "}
            {response.answer[item.id]}
          </Text>
        ))}
      </View>
    );
  } else if (item.type === "multipleAnswer" || item.type === "dropdown") {
    const optionCounts = item.options.map((option, index) => {
      return {
        value: responseAnswer.reduce((count, answer) => {
          return count + (answer === option.value ? 1 : 0);
        }, 0),

        color: colors[index % colors.length],
      };
    });
    return (
      <View style={styles.constainer}>
        <Text style={styles.questionTitle}>{item.title}</Text>
        <MyGraph optionCounts={optionCounts} options={item.options} />
      </View>
    );
  } else {
    const optionCounts = item.options.map((option, index) => {
      return {
        value: responseAnswer.reduce((count, answerArray) => {
          return (
            count +
            answerArray.reduce((innerCount, answer) => {
              return innerCount + (answer === option.value ? 1 : 0);
            }, 0)
          );
        }, 0),
        color: colors[index % colors.length],
      };
    });
    return (
      <View style={styles.constainer}>
        <Text style={styles.questionTitle}>{item.title}</Text>
        <MyGraph optionCounts={optionCounts} options={item.options} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  constainer: {
    marginVertical: 5,
    marginHorizontal: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },
  questionTitle: {
    fontFamily: FONT.h2,
    fontSize: 16,
  },
  shortAnswer: {
    fontFamily: FONT.text,
    fontSize: 14,
    paddingVertical: 10,
    paddingLeft: 15,
  },
});
