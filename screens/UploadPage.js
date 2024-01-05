import { Divider } from "react-native-paper";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header, DisplayCard } from "../components";
import { COLORS, FONT, icons } from "../constants";
import globalStyle from "../App/general.style";

const UploadPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header headerText={"UPLOAD"} />
      <View style={styles.dataDisplay}>
        <DisplayCard
          title="Total Submission"
          icon={icons.complete}
          number="13"
          desc="All time form submission"
        />
        <DisplayCard
          title="Total Form Created"
          icon={icons.created}
          number="5"
          desc="All time form created"
        />
      </View>
      <Divider
        style={{
          paddingVertical: 0.5,
          backgroundColor: COLORS.tertiary,
        }}
      />
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.createBtn}
          onPress={() => navigation.navigate("UploadPage2")}
        >
          <Image source={icons.createNew} />
          <Text style={styles.createBtnText}>Create New Form</Text>
        </TouchableOpacity>
      </View>
      <Divider
        style={{
          paddingVertical: 0.5,
          backgroundColor: COLORS.tertiary,
        }}
      />
    </View>
  );
};
export default UploadPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  dataDisplay: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
    justifyContent: "center",
    marginBottom: 10,
  },
  card: {
    alignItems: "center",
    paddingVertical: 10,
  },
  createBtn: {
    display: "flex",
    alignItems: "center",
    width: 300,
    padding: 10,
    gap: 15,
    borderRadius: 10,
    borderColor: COLORS.secondaryTextIcon,
    borderStyle: "dashed",
    borderWidth: 1,
  },
  createBtnText: {
    fontFamily: FONT.text,
    fontSize: 14,
    color: COLORS.secondaryTextIcon,
  },
});
