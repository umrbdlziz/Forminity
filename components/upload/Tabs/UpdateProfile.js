import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import globalStyle from "../../../App/general.style";

import { COLORS, FONT, icons } from "../../../constants";

import { updatePassword } from "firebase/auth";

import { FIREBASE_DB, FIREBASE_AUTH } from "../../firebase/config";
import { doc, collection, getDoc, updateDoc } from "firebase/firestore/lite";
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
  const userData = useSelector((state) => state.userData);

  const logout = async () => {
    try {
      await FIREBASE_AUTH.signOut();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const update = async () => {
    try {
      // Check if the password and confirmation password match
      if (password !== confirmPassword) {
        alert(
          "Passwords do not match. Please enter the same password in both fields."
        );
        return;
      }

      // Update the user information in Firebase
      const user = FIREBASE_AUTH.currentUser;

      // Check if the user is authenticated
      if (user) {
        // If a new password is provided, update the password
        if (password) {
          await updatePassword(user, password);
        }

        const userDocRef = doc(FIREBASE_DB, "users", uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          // Update other fields in the user document
          await updateDoc(userDocRef, {
            username: username || userDocSnapshot.data().username,
            school: school || userDocSnapshot.data().school,
            desasiswa: desasiswa || userDocSnapshot.data().desasiswa,
            // Add other fields you want to update
          });

          alert("Profile updated successfully!");
        } else {
          console.log("User document not found");
        }
      } else {
        alert("User not authenticated");
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
      // Handle errors
      alert("Error updating user profile. Please try again.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.pointContainer}>
          <Image source={icons.profilePicture} style={styles.profilePicture} />
          <View style={styles.pointContainer2}>
            <View style={styles.pointBox}>
              <Text style={styles.txInfo2}>Point</Text>
              <Text style={styles.txInfo}>{userData.point}</Text>
            </View>
          </View>
          <View style={styles.pointContainer2}>
            <View style={styles.pointBox}>
              <Text style={styles.txInfo2}>MyCSD</Text>
              <Text style={styles.txInfo}>{userData.mycsd}</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoTx}>
          {userData ? (
            <>
              <Text style={styles.txInfo}>{userData.fullName}</Text>
              <Text style={styles.txInfo}>{userData.email}</Text>
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
          placeholder={userData.username}
          placeholderTextColor={COLORS.secondaryTextIcon}
          style={styles.txInput}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.txTitle}>School: </Text>

        <TextInput
          value={school}
          onChangeText={(school) => setSchool(school)}
          placeholder={userData.school}
          placeholderTextColor={COLORS.secondaryTextIcon}
          style={styles.txInput}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.txTitle}>Desasiswa: </Text>

        <TextInput
          value={desasiswa}
          onChangeText={(desasiswa) => setDesasiswa(desasiswa)}
          placeholder={userData.desasiswa}
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
      <TouchableOpacity
        style={[globalStyle.Btn2, globalStyle.shadow]}
        onPress={logout}
      >
        <Text style={globalStyle.textBtn}>LOG OUT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  profilePicture: {
    width: 50,
    height: 50,
  },
  pointContainer: {
    display: "inline-flex",
    flexDirection: "row",
    gap: 10,
  },
  pointContainer2: {
    alignItems: "center",
    display: "inline-flex",
    flexDirection: "row",
    gap: 5,
  },
  pointBox: {
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
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
    position: "relative",
  },
  txInfo: {
    fontSize: 13,
    fontFamily: FONT.subtitle,
    fontWeight: "700",
    color: COLORS.primaryText,
  },
  txInfo2: {
    fontSize: 13,
    fontFamily: FONT.subtitle,
    color: COLORS.primaryText,
  },
  txPoint: {
    fontSize: 13,
    fontFamily: FONT.subtitle,
    fontWeight: "700",
    color: COLORS.primary,
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
