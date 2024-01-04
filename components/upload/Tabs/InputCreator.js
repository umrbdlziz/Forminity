import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Input } from "@rneui/themed";

import { COLORS, FONT } from "../../../constants";
import RenderForms from "../RenderForms";
import { formEdited } from "../../../redux/formSlice";

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
    newList[index] = newValue;
    setCurrOption(newList);
  };

  const handleOptionAdded = () => {
    const newList = [...currOption, "newOption"];
    setCurrOption(newList);
    dispatch(formEdited(currType, currId, currTitle, currOption));
  };

  return typeof route.params !== "undefined" &&
    typeof route.params.title !== "undefined" ? (
    <View>
      <Input
        label="Question"
        labelStyle={styles.labelStyle}
        value={currTitle}
        onChangeText={(e) => setCurrTitle(e)}
      />
      {currType !== "shortAnswer" ? (
        <View>
          {currOption.map((temp, index) => (
            <View>
              <Input
                value={currOption[index]}
                onChangeText={(e) => handleOptionChange(index, e)}
              />
              <TouchableOpacity
                onPress={() =>
                  setCurrOption(
                    currOption.filter((e) => e !== currOption[index])
                  )
                }
              >
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity onPress={() => handleOptionAdded()}>
            <Text>Add Option</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View></View>
      )}
      <TouchableOpacity
        onPress={() => {
          dispatch(formEdited(currType, currId, currTitle, currOption));
          navigation.navigate("UploadPage", {
            screen: "Builder",
          });
        }}
      >
        <Text>Update Question</Text>
      </TouchableOpacity>
    </View>
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
    fontSize: 16,
    color: COLORS.primaryText,
  },
  inputStyle: {
    fontFamily: FONT.placeholder,
    fontSize: 12,
  },
});
