import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { formDeleted } from "../../redux/formSlice";
import { FONT, COLORS } from "../../constants";
import globalStyle from "../../App/general.style";

const RenderForms = () => {
  const dispatch = useDispatch();
  const forms = useSelector((state) => state.form);
  const renderForms = ({ item }) => {
    return (
      <View>
        {item.type === "shortAnswer" ? (
          <View style={styles.questionContainer}>
            <View>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.options}>
              <Text style={styles.option}>short-answer text</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.buttonStyle,
                  globalStyle.shadow,
                  { borderColor: COLORS.secondaryTextIcon },
                ]}
              >
                <Text
                  style={[
                    styles.titleStyle,
                    { color: COLORS.secondaryTextIcon },
                  ]}
                >
                  edit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonStyle,
                  globalStyle.shadow,
                  { borderColor: COLORS.err },
                ]}
                onPress={() => dispatch(formDeleted(item.id))}
              >
                <Text style={[styles.titleStyle, { color: COLORS.err }]}>
                  delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : item.type === "multipleAnswer" ||
          item.type === "checkbox" ||
          item.type === "dropdown" ? (
          <View style={styles.questionContainer}>
            <View>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.options}>
              {item.options.map((option) => (
                <Text style={styles.option}>{option}</Text>
              ))}
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.buttonStyle,
                  globalStyle.shadow,
                  { borderColor: COLORS.secondaryTextIcon },
                ]}
              >
                <Text
                  style={[
                    styles.titleStyle,
                    { color: COLORS.secondaryTextIcon },
                  ]}
                >
                  edit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonStyle,
                  globalStyle.shadow,
                  { borderColor: COLORS.err },
                ]}
                onPress={() => dispatch(formDeleted(item.id))}
              >
                <Text style={[styles.titleStyle, { color: COLORS.err }]}>
                  delete
                </Text>
              </TouchableOpacity>
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
      data={forms}
      renderItem={renderForms}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={true}
      style={styles.container}
      contentContainerStyle={styles.scrollview}
    />
  );
};

export default RenderForms;

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
  buttonStyle: {
    backgroundColor: COLORS.primary,
    borderWidth: 1.5,
    borderRadius: 10,
    width: 60,
    height: 30,
    justifyContent: "center",
  },
  titleStyle: {
    fontFamily: FONT.btn,
    fontSize: 10,
    textAlign: "center",
  },
});
