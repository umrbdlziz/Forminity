import React from "react";
import { Divider, Button, CheckBox } from "@rneui/themed";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { FONT, COLORS } from "../../constants";
import globalStyle from "../../App/general.style";

const BuilderQuestion = () => {
  return (
    <View>
      <Divider inset={true} insetType="middle" width={1.5} />
      <View style={styles.container}>
        <View style={styles.questionContainer}>
          <View>
            <Text style={styles.title}>Name</Text>
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
                style={[styles.titleStyle, { color: COLORS.secondaryTextIcon }]}
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
            >
              <Text style={[styles.titleStyle, { color: COLORS.err }]}>
                delete
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.questionContainer}>
          <View>
            <Text style={styles.title}>What is your country origin?</Text>
          </View>
          <View style={styles.options}>
            <Text style={styles.option}>Malaysia</Text>
            <Text style={styles.option}>Thailand</Text>
            <Text style={styles.option}>Indonesia</Text>
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
                style={[styles.titleStyle, { color: COLORS.secondaryTextIcon }]}
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
            >
              <Text style={[styles.titleStyle, { color: COLORS.err }]}>
                delete
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.questionContainer}>
          <View>
            <Text style={styles.title}>What is your favorite foot?</Text>
          </View>
          <View style={styles.options}>
            <Text style={styles.option}>Nasi Lemak</Text>
            <Text style={styles.option}>Nasi Ayam</Text>
            <Text style={styles.option}>Nasi Goreng</Text>
          </View>
          <View style={styles.buttonContainer}>
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
              >
                <Text style={[styles.titleStyle, { color: COLORS.err }]}>
                  delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <Divider inset={true} insetType="middle" width={1.5} />
      <View style={styles.addContainer}>
        <TouchableOpacity style={[styles.addBtnContainer, globalStyle.shadow]}>
          <Text style={styles.addBtn}>SHORT ANSWER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.addBtnContainer, globalStyle.shadow]}>
          <Text style={styles.addBtn}>MULTIPLE ANSWER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.addBtnContainer, globalStyle.shadow]}>
          <Text style={styles.addBtn}>CHECKBOX</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.addBtnContainer, globalStyle.shadow]}>
          <Text style={styles.addBtn}>DROP DOWN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BuilderQuestion;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    display: "flex",
    gap: 20,
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
  buttonContainerStyle: {
    borderRadius: 10,
    width: 60,
    height: 30,
  },
  addContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  addBtnContainer: {
    height: 40,
    width: 80,
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    borderColor: COLORS.secondary,
    borderWidth: 1,
  },
  addBtn: {
    color: COLORS.secondary,
    fontFamily: FONT.btn,
    fontWeight: "600",
    textAlign: "center",
    fontSize: 10,
  },
});
