import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";

import { COLORS, FONT } from "../../../constants";
// import { formEdited } from "../../../redux/formSlice";
import { itemEdited } from "../../../redux/itemSlice";

const InputCreator = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [currTitle, setCurrTitle] = useState("");
  const [currId, setCurrId] = useState();
  const [currType, setCurrType] = useState();
  const [currOption, setCurrOption] = useState([]);

  const route = useRoute();

  useEffect(() => {
    if (
      typeof route.params !== "undefined" &&
      typeof route.params.title !== "undefined"
    ) {
      setCurrType(route.params.type);
      setCurrId(route.params.id);
      setCurrTitle(route.params.title);
      setCurrOption(route.params.options);
    }
  }, [route.params]);

  const handleOptionChange = (index, newValue) => {
    const newList = [...currOption];
    newList[index] = { value: newValue };
    setCurrOption(newList);
  };

  const handleOptionAdded = () => {
    const newList = [...currOption, { value: "newOption" }];
    setCurrOption(newList);
    dispatch(itemEdited(currType, currId, currTitle, currOption));
  };

  return typeof route.params !== "undefined" &&
    typeof route.params.title !== "undefined" ? (
    <ScrollView style={styles.container}>
      <Text style={styles.labelStyle}>Question:</Text>
      <TextInput
        value={currTitle}
        onChangeText={(e) => setCurrTitle(e)}
        style={styles.inputTitle}
      />
      {currType !== "shortAnswer" && (
        <View>
          {currOption.map((option, index) => (
            <View key={index} style={styles.optionContainer}>
              <TextInput
                value={option.value}
                onChangeText={(e) => handleOptionChange(index, e)}
                style={styles.inputOption}
              />
              <TouchableOpacity
                onPress={() =>
                  setCurrOption(
                    currOption.filter((e) => e.value !== option.value)
                  )
                }
                style={styles.deleteBtn}
              >
                <Text style={styles.deleteBtnText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity
            onPress={() => handleOptionAdded()}
            style={styles.addBtn}
          >
            <Text style={styles.addBtnText}>Add Option</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity
        onPress={() => {
          dispatch(itemEdited(currType, currId, currTitle, currOption));
          navigation.navigate("UploadPage2", {
            screen: "Builder",
          });
        }}
        style={styles.updateBtn}
      >
        <Text style={styles.updateBtnText}>update question</Text>
      </TouchableOpacity>
    </ScrollView>
  ) : (
    <View>
      <Text>No edit component</Text>
    </View>
  );
};

export default InputCreator;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    padding: 20,
  },
  scrollview: {
    gap: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  containerStyle: {
    fontFamily: FONT.splashscreen,
    backgroundColor: COLORS.primary,
  },
  labelStyle: {
    fontFamily: FONT.h2,
    fontSize: 16,
    color: COLORS.primaryText,
  },
  inputTitle: {
    paddingHorizontal: 10,
    fontFamily: FONT.text,
    fontSize: 14,
    borderBottomColor: COLORS.secondaryTextIcon,
    borderBottomWidth: 0.7,
  },
  optionContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
  inputOption: {
    borderBottomColor: COLORS.secondaryTextIcon,
    borderBottomWidth: 0.7,
    marginHorizontal: 10,
    width: 200,
    height: 40,
  },
  deleteBtn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
    marginVertical: 7,
    borderRadius: 5,
    borderColor: COLORS.err,
    borderWidth: 1,
    justifyContent: "center",
  },
  deleteBtnText: {
    color: COLORS.err,
    fontFamily: FONT.btn,
    fontSize: 10,
  },
  addBtn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 15,
    marginRight: 255,
    marginVertical: 5,
    borderRadius: 10,
    borderColor: COLORS.secondaryTextIcon,
    borderWidth: 1,
    justifyContent: "center",
  },
  addBtnText: {
    color: COLORS.secondaryTextIcon,
    fontFamily: FONT.btn,
    fontSize: 10,
  },
  updateBtn: {
    backgroundColor: COLORS.primaryText,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    // borderColor: COLORS.secondaryTextIcon,
    borderWidth: 1,
    alignItems: "center",
  },
  updateBtnText: {
    color: COLORS.primary,
    fontFamily: FONT.btn,
  },
});
