import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { DeleteBtn, EditBtn } from "../Btn";
import { FONT, COLORS } from "../../../constants";

const RenderFormsBuilder = () => {
  const items = useSelector((state) => state.item);

  const renderForms = ({ item }) => {
    return (
      <View>
        {item.type === "shortAnswer" ? (
          <View style={styles.questionContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text
                style={{
                  fontFamily: FONT.placeholder,
                  color: COLORS.secondaryTextIcon,
                  fontSize: 12,
                }}
              >
                [{item.type}]
              </Text>
            </View>
            <View style={styles.options}>
              <Text style={styles.option}>short-answer text</Text>
            </View>
            <View style={styles.buttonContainer}>
              <EditBtn
                type={item.type}
                id={item.id}
                title={item.title}
                options={item.options}
              />
              <DeleteBtn itemId={item.id} />
            </View>
          </View>
        ) : item.type === "multipleAnswer" ||
          item.type === "checkbox" ||
          item.type === "dropdown" ? (
          <View style={styles.questionContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text
                style={{
                  fontFamily: FONT.placeholder,
                  color: COLORS.secondaryTextIcon,
                  fontSize: 12,
                }}
              >
                [{item.type}]
              </Text>
            </View>
            <View style={styles.options}>
              {item.options.map((option, index) => (
                <Text
                  key={`${item.id}-${index}-${option}`}
                  style={styles.option}
                >
                  {option.value}
                </Text>
              ))}
            </View>
            <View style={styles.buttonContainer}>
              <EditBtn
                type={item.type}
                id={item.id}
                title={item.title}
                options={item.options}
              />
              <DeleteBtn itemId={item.id} />
            </View>
          </View>
        ) : (
          console.log("nothing")
        )}
      </View>
    );
  };

  return (
    <FlatList
      data={items}
      renderItem={renderForms}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={true}
      style={styles.container}
      contentContainerStyle={styles.scrollview}
    />
  );
};

export default RenderFormsBuilder;

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  scrollview: {
    gap: 40,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  questionContainer: {
    display: "flex",
    gap: 10,
  },
  title: {
    fontFamily: FONT.h2,
    fontSize: 16,
    color: COLORS.primaryText,
    width: 250,
  },
  options: {
    paddingHorizontal: 10,
  },
  option: {
    fontFamily: FONT.placeholder,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 5,
  },
});
