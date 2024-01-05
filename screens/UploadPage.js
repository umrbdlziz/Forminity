import { useState } from "react";
import { Divider } from "react-native-paper";
import { Overlay } from "@rneui/themed";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header, DisplayCard, CreatedCard } from "../components";
import { COLORS, FONT, icons } from "../constants";

const UploadPage = () => {
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <Header headerText={"UPLOAD"} />
      <View style={styles.dataDisplay}>
        <DisplayCard
          title="Total Submission"
          icon={icons.complete}
          number="123"
          desc="All time form submission"
        />
        <DisplayCard
          title="Total Form Created"
          icon={icons.created}
          number="4"
          desc="All time form created"
        />
      </View>
      <Divider
        style={{
          paddingVertical: 0.5,
          marginVertical: 10,
          backgroundColor: COLORS.tertiary,
        }}
      />
      <ScrollView contentContainerStyle={styles.card}>
        <TouchableOpacity style={styles.createBtn} onPress={toggleOverlay}>
          <Image source={icons.createNew} />
          <Text style={styles.createBtnText}>Create New Form</Text>
        </TouchableOpacity>
        <CreatedCard
          title="DIGITAL SAFETY CAMPAIGN"
          time="about 12 hour ago"
          number={4}
          desc={"No description"}
        />
        <CreatedCard
          title="CABARAN DALAM PENGEKALAN TOLERANSI ANTARA ETNIK DI MALAYSIA"
          time="about 2 week ago"
          number={13}
          desc={
            "Kami menjemput anda untuk mengambil bahagian dan menjadi sebahagian daripada responden kami. Tinjauan ini akan mengambil masa kira-kira 2 hingga 4 minit untuk diselesaikan. Segala maklumat yang dikumpulkan hanya akan digunakan untuk tujuan akademik sahaja dan dirahsiakan"
          }
        />
        <CreatedCard
          title="CORRELATION BETWEEN THE ROLE OF SOCIAL MEDIA AND AWARENESS OF JAPAN'S NUCLEAR-CONTAMINATED WATER IN MALAYSIA"
          time="a mount ago"
          number={21}
          desc={
            "This data collecting is to fulfill the course of YKT 230 Communication Research Method。All data collected will only be used for the purpose of research          "
          }
        />
        <CreatedCard
          title="PROGRAM DONATE BLOOD HERO 2.0"
          time="about 2 mounth ago"
          number={39}
          desc={`Program derma darah "Blood Hero" kini kembali lagi! Program ini terbuka semua pelajar USM anjuran Ikatan Mahasiswa/I Johor (IKMAR) Universiti Sains Malaysia dengan kerjasama Pusat Sejahtera dan Unit Tabung Darah Hospital Pulau Pinang`}
        />
      </ScrollView>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={styles.overlayContainer}
      >
        <TouchableOpacity onPress={toggleOverlay} style={styles.imgContainer}>
          <Image source={icons.close} style={styles.img} />
        </TouchableOpacity>
        <Text style={styles.title}>Create form</Text>
        <Text style={styles.desc}>
          create a new form to start collecting responses
        </Text>
        <Text style={styles.inputName}>Form name:</Text>
        <TextInput style={styles.inputNameContainer} />
        <Text style={styles.inputDesc}>Form description:</Text>
        <TextInput
          style={styles.inputDescContainer}
          multiline={true}
          autoGrow={true}
        />
        <TouchableOpacity
          style={styles.createFormBtn}
          onPress={() => {
            navigation.navigate("UploadPage2");
            setVisible(!visible);
          }}
        >
          <Text style={styles.createFormBtnText}>CREATE</Text>
        </TouchableOpacity>
      </Overlay>
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
    gap: 15,
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
  overlayContainer: {
    display: "flex",
    padding: 20,
  },
  imgContainer: {
    display: "flex",
    alignItems: "flex-end",
  },
  img: {
    width: 15,
    height: 15,
  },
  title: {
    fontFamily: FONT.h2,
    fontSize: 18,
    color: COLORS.primaryText,
  },
  desc: {
    fontFamily: FONT.subtitle,
    fontSize: 12,
    color: COLORS.secondaryTextIcon,
    paddingBottom: 20,
  },
  inputName: {
    fontFamily: FONT.text,
    fontSize: 14,
    color: COLORS.primaryText,
    paddingVertical: 5,
  },
  inputNameContainer: {
    borderWidth: 1,
    borderColor: COLORS.secondaryTextIcon,
    borderRadius: 10,
    width: 250,
    height: 40,
  },
  inputDesc: {
    fontFamily: FONT.text,
    fontSize: 14,
    color: COLORS.primaryText,
    paddingVertical: 5,
  },
  inputDescContainer: {
    borderWidth: 1,
    borderColor: COLORS.secondaryTextIcon,
    borderRadius: 10,
    width: 250,
    height: 100,
    textAlignVertical: "bottom",
  },
  createFormBtn: {
    alignItems: "flex-end",
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    paddingVertical: 5,
    marginLeft: 120,
    marginVertical: 10,
    alignItems: "center",
  },
  createFormBtnText: {
    color: COLORS.primary,
  },
});
