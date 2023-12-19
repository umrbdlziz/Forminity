import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { COLORS, FONT, icons } from "../constants";
import globalStyle from "../App/general.style";

const LoginPage = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <Image source={icons.loginIcon} style={style.loginIcon} />
      <View style={style.inputContainer}>
        <Image source={icons.username} style={style.icon} />
        <TextInput
          placeholder="Username"
          placeholderTextColor={COLORS.secondaryTextIcon}
          style={style.txInput}
        />
      </View>
      <View style={style.inputContainer}>
        <Image source={icons.password} style={style.icon} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={COLORS.secondaryTextIcon}
          style={style.txInput}
        />
      </View>
      <View style={style.BtnContainer}>
        <TouchableOpacity
          style={[globalStyle.Btn, globalStyle.shadow]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "HomePage" })
          }
        >
          <Text style={globalStyle.textBtn}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={style.signUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginIcon: {
    width: 114,
    height: 114,
    margin: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  icon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  txInput: {
    width: 250,
    fontFamily: FONT.subtitle,
    borderWidth: 1,
    borderColor: COLORS.secondaryTextIcon,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 15,
  },
  BtnContainer: {
    marginTop: 50,
    alignItems: "flex-end",
  },
  signUp: {
    fontFamily: FONT.btn,
    color: COLORS.secondaryTextIcon,
    fontSize: 12,
    marginRight: 15,
    marginTop: 5,
  },
});
