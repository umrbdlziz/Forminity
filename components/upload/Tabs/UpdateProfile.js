import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import globalStyle from "../../../App/general.style";

import { COLORS, FONT, icons } from "../../../constants";
import { Header } from "../../home/Header";
import { FIREBASE_DB } from "../../firebase/config";
import { doc, collection, getDoc } from "firebase/firestore/lite";
import { useSelector } from "react-redux";

const UpdateProfile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [matric, setMatric] = useState("");
  const [school, setSchool] = useState("");
  const [desasiswa, setDesasiswa] = useState("");

  const uid = useSelector((state) => state.uid.value);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDocRef = doc(FIREBASE_DB, "users", uid);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          setUserData(userData);
        } else {
          console.log("User document not found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [uid]);

  const update = async () => {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.infoImg}></View>

        <View style={styles.pointContainer}>
          <View style={styles.pointContainer2}>
            <View style={styles.pointBox}>
              <Text style={styles.txInfo}>100</Text>
            </View>
            <Text style={styles.txInfo}>Point</Text>
          </View>
          <View style={styles.pointContainer2}>
            <View style={styles.pointBox}>
              <Text style={styles.txInfo}>2</Text>
            </View>
            <Text style={styles.txInfo}>MyCSD</Text>
          </View>
        </View>

        <View style={styles.infoTx}>
          {userData ? (
            <>
              <Text style={styles.txInfo}>{userData.email}</Text>
              <Text style={styles.txInfo}>{userData.fullName}</Text>
              <Text style={styles.txInfo}>{userData.matric}</Text>
            </>
          ) : (
            <Text>Loading user data...</Text>
          )}
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.txTitle}>Username: </Text>
        <TextInput
          value={username}
          onChangeText={(username) => setUsername(username)}
          placeholder="Username"
          placeholderTextColor={COLORS.secondaryTextIcon}
          style={styles.txInput}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.txTitle}>School: </Text>

        <TextInput
          value={school}
          onChangeText={(school) => setSchool(school)}
          placeholder="School"
          placeholderTextColor={COLORS.secondaryTextIcon}
          style={styles.txInput}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.txTitle}>Desasiswa: </Text>

        <TextInput
          value={desasiswa}
          onChangeText={(desasiswa) => setDesasiswa(desasiswa)}
          placeholder="Desasiswa"
          placeholderTextColor={COLORS.secondaryTextIcon}
          style={styles.txInput}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.txTitle}>New Password: </Text>
        <TextInput
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={COLORS.secondaryTextIcon}
          autoCapitalize="none"
          style={styles.txInput}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.txTitle}>Confirmation Password: </Text>
        <TextInput
          value={confirmPassword}
          onChangeText={(confirmPassword) =>
            setConfirmPassword(confirmPassword)
          }
          placeholder="Confirm Password"
          secureTextEntry={true}
          placeholderTextColor={COLORS.secondaryTextIcon}
          autoCapitalize="none"
          style={styles.txInput}
        />
      </View>
      <TouchableOpacity
        style={[globalStyle.Btn, globalStyle.shadow]}
        onPress={update}
      >
        <Text style={globalStyle.textBtn}>UPDATE</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  infoImg: {
    width: 99,
    height: 99,
    backgroundColor: COLORS.secondary,
  },
  pointContainer: {
    display: "inline-flex",
    flexDirection: "row",
    gap: 5,
  },
  pointContainer2: {
    alignItems: "center",

    display: "inline-flex",
    flexDirection: "column",
    gap: 5,
  },
  pointBox: {
    backgroundColor: COLORS.tertiary,
    borderRadius: 20,
    width: 50,
    alignItems: "center",
    paddingVertical: 5,
  },
  infoContainer: {
    alignItems: "center",
    backgroundColor: COLORS.primary,
    width: 330,
    borderRadius: 20,
    display: "inline-flex",
    flexDirection: "column",
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    position: "relative",
  },
  infoTx: {
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 10,
    position: "relative",
  },
  txInfo: {
    fontSize: 13,
    fontFamily: FONT.subtitle,
    fontWeight: "700",
    color: COLORS.primaryText,
  },

  container: {
    backgroundColor: COLORS.background,
    display: "flex",
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },

  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
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