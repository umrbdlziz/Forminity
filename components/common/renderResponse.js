import { Text, StyleSheet, TextInput } from "react-native";

import { COLORS, FONT } from "../../constants";

export const renderResponse = (item, responseData) => {
  return (
    <>
      <Text style={styles.questionTitle}>{item.title}</Text>
      <Text style={styles.questionTitle}>{item.id}</Text>
      {/* {responseData && responseData.map((e) => console.log(e.answer))}
      {responseData && console.log(responseData.length)} */}

      {item.type === "shortAnswer" && <Text>shortAnswer</Text>}

      {item.type === "multipleAnswer" && <Text>multipleAnswer</Text>}

      {item.type === "checkbox" && <Text>checkbox</Text>}

      {item.type === "dropdown" && <Text>dropdown</Text>}
    </>
  );
};

const styles = StyleSheet.create({
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
