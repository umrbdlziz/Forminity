import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FIREBASE_AUTH } from "../components/firebase/config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { COLORS, FONT, icons } from "../constants";
import globalStyle from "../App/general.style";
import { ActivityIndicator } from "react-native-paper";

const LoginPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const onButtonPress = () => {
    // navigation.navigate("BottomTabsRoot", { screen: "HomePage" });
    console.log("Hey");
  };

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert("Check Your Email");
    } catch (error) {
      console.log(error);
      alert("Sign In failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert("Check Your Email");
    } catch (error) {
      console.log(error);
      alert("Sign In failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={style.container}>
      <Image source={icons.loginIcon} style={style.loginIcon} />
      <View style={style.inputContainer}>
        <Image source={icons.username} style={style.icon} />
        <TextInput
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder="Email"
          placeholderTextColor={COLORS.secondaryTextIcon}
          autoCapitalize="none"
          style={style.txInput}
        />
      </View>
      <View style={style.inputContainer}>
        <Image source={icons.password} style={style.icon} />
        <TextInput
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={COLORS.secondaryTextIcon}
          style={style.txInput}
        />
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={style.BtnContainer}>
          <TouchableOpacity
            style={[globalStyle.Btn, globalStyle.shadow]}
            onPress={signIn}
          >
            <Text style={globalStyle.textBtn}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={signUp}>
            <Text style={style.signUp}>Create new account</Text>
          </TouchableOpacity>
        </View>
      )}
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
