import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { Header } from "../components";
import { SignUpBtn } from "../components/upload/Btn";

import { COLORS, FONT, icons } from "../constants";
import globalStyle from "../App/general.style";

import { FIREBASE_AUTH, FIREBASE_DB } from "../components/firebase/config";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { ActivityIndicator } from "react-native-paper";
import { doc, setDoc } from "firebase/firestore/lite";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [matric, setMatric] = useState("");
  const [school, setSchool] = useState("");
  const [desasiswa, setDesasiswa] = useState("");
  const [loading, setLoading] = useState(false);

  const [userId, setUserId] = useState(null);

  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    // Validate email format
    const emailRegex = /^[^\s@]+@student\.usm\.my$/i;

    if (!emailRegex.test(email)) {
      setLoading(false);
      alert("Please use USM student email. Example:  'email@student.usm.my'");
      return;
    }

    if (password !== confirmPassword) {
      setLoading(false);
      alert(
        "Passwords do not match. Please enter the same password in both fields."
      );
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(user);

      console.log(user);
      const userDocRef = doc(FIREBASE_DB, "users", user.uid);

      await setDoc(userDocRef, {
        email: email,
        fullName: fullName,
        username: username,
        matric: matric,
        school: school,
        desasiswa: desasiswa,
        password: password,
        point: 0,
      });
    } catch (error) {
      console.log(error);
      if (error.code === "auth/email-already-in-use") {
        alert("Email is already in use. Please use another email.");
      } else if (error.code === "auth/weak-password") {
        alert("Password should be at least 6 characters.");
      } else alert(error.code);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={style.container}>
      <Header headerText={"Sign Up"} />
      <View style={style.inputContainer}>
        <Text style={style.txTitle}>Email: </Text>
        <TextInput
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder="Student Email Only '@usm.student.my'"
          placeholderTextColor={COLORS.secondaryTextIcon}
          autoCapitalize="none"
          style={style.txInput}
        />
      </View>
      <View style={style.inputContainer}>
        <Text style={style.txTitle}>Full Name: </Text>
        <TextInput
          value={fullName}
          onChangeText={(fullName) => setFullName(fullName)}
          placeholder="Full Name"
          placeholderTextColor={COLORS.secondaryTextIcon}
          style={style.txInput}
        />
      </View>
      <View style={style.inputContainer}>
        <Text style={style.txTitle}>Username: </Text>

        <TextInput
          value={username}
          onChangeText={(username) => setUsername(username)}
          placeholder="Username"
          placeholderTextColor={COLORS.secondaryTextIcon}
          style={style.txInput}
        />
      </View>
      <View style={style.inputContainer}>
        <Text style={style.txTitle}>Matric Number: </Text>

        <TextInput
          value={matric}
          onChangeText={(matric) => setMatric(matric)}
          placeholder="Matric Number"
          placeholderTextColor={COLORS.secondaryTextIcon}
          style={style.txInput}
        />
      </View>
      <View style={style.inputContainer}>
        <Text style={style.txTitle}>School: </Text>

        <TextInput
          value={school}
          onChangeText={(school) => setSchool(school)}
          placeholder="School"
          placeholderTextColor={COLORS.secondaryTextIcon}
          style={style.txInput}
        />
      </View>
      <View style={style.inputContainer}>
        <Text style={style.txTitle}>Desasiswa: </Text>

        <TextInput
          value={desasiswa}
          onChangeText={(desasiswa) => setDesasiswa(desasiswa)}
          placeholder="Desasiswa"
          placeholderTextColor={COLORS.secondaryTextIcon}
          style={style.txInput}
        />
      </View>

      <View style={style.inputContainer}>
        <Text style={style.txTitle}>Password: </Text>
        <TextInput
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={COLORS.secondaryTextIcon}
          autoCapitalize="none"
          style={style.txInput}
        />
      </View>
      <View style={style.inputContainer}>
        <Text style={style.txTitle}>Confirmation Password: </Text>
        <TextInput
          value={confirmPassword}
          onChangeText={(confirmPassword) =>
            setConfirmPassword(confirmPassword)
          }
          placeholder="Confirm Password"
          secureTextEntry={true}
          placeholderTextColor={COLORS.secondaryTextIcon}
          autoCapitalize="none"
          style={style.txInput}
        />
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <View style={style.BtnContainer}>
            <TouchableOpacity
              style={[globalStyle.Btn, globalStyle.shadow]}
              onPress={signUp}
            >
              <Text style={globalStyle.textBtn}>SIGNUP</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </ScrollView>
  );
};
export default SignUpPage;

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  signUp: {
    fontFamily: FONT.btn,
    color: COLORS.secondaryTextIcon,
    fontSize: 12,
    marginRight: 15,
    marginTop: 5,
  },
  txInput: {
    backgroundColor: COLORS.primary,
    display: "flex",
    width: 330,
    paddingHorizontal: 15,
    paddingVertical: 12,
    alignItems: "center",
    gap: 10,
    fontFamily: FONT.subtitle,

    borderRadius: 10,
  },
  txTitle: {
    fontSize: 16,
    fontFamily: FONT.subtitle,
    fontWeight: "700",
    color: COLORS.primaryText,
  },
});
