import { useState, useEffect } from "react";
import { Divider } from "react-native-paper";
import { Overlay } from "@rneui/themed";
import SelectDropdown from "react-native-select-dropdown";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setName, setDescription, addCategory } from "../redux/formSlice";

import { Header, DisplayCard, CreatedCard } from "../components";
import { COLORS, FONT, icons } from "../constants";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrzOY7I1fzL6cCHzQ9xPN5qtjatZDVqcI",
  authDomain: "firstproject-408306.firebaseapp.com",
  projectId: "firstproject-408306",
  storageBucket: "firstproject-408306.appspot.com",
  messagingSenderId: "525543077982",
  appId: "1:525543077982:web:f3a4cc0579cf99cfc4dccf",
  measurementId: "G-YHLJ498C8M",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const UploadPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [totalForm, setTotalForm] = useState(0);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const querySnapshot = await getDocs(collection(db, "users/userId/form"));
      setTotalForm(querySnapshot.size);
      const cardsData = querySnapshot.docs.map((doc) => (
        <CreatedCard
          key={doc.id}
          title={doc.data().info.name}
          time="about 12 hour ago"
          number={4}
          desc={doc.data().info.description}
        />
      ));
      setCards(cardsData);
    };

    fetchCards();
  }, []);

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
          number={totalForm}
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
        {/* <CreatedCard
          title="DIGITAL SAFETY CAMPAIGN"
          time="about 12 hour ago"
          number={4}
          desc={"No description"}
        /> */}
        {cards}
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
        <TextInput
          style={styles.inputNameContainer}
          onChangeText={(text) => dispatch(setName(text))}
        />
        <Text style={styles.inputDesc}>Form description:</Text>
        <TextInput
          style={styles.inputDescContainer}
          multiline={true}
          autoGrow={true}
          onChangeText={(text) => dispatch(setDescription(text))}
        />
        <Text style={styles.inputName}>Category:</Text>
        <SelectDropdown
          data={[
            "Academic",
            "Social",
            "Health",
            "Psychology",
            "Sport",
            "Others",
          ]}
          onSelect={(value) => dispatch(addCategory(value))}
          defaultButtonText={"Select an option"}
          buttonStyle={styles.buttonStyle}
          buttonTextStyle={styles.buttonTextStyle}
          rowTextStyle={styles.rowTextStyle}
          buttonTextAfterSelection={(selectedItem) => selectedItem}
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
    borderRadius: 5,
    paddingLeft: 10,
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
    borderRadius: 5,
    paddingLeft: 10,
    paddingVertical: 10,
    width: 250,
    height: 100,
    textAlignVertical: "bottom",
  },
  buttonStyle: {
    width: 250,
    height: 40,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
  },
  buttonTextStyle: {
    fontFamily: FONT.text,
    fontSize: 14,
  },
  rowTextStyle: {
    fontSize: 14,
    color: COLORS.secondaryTextIcon,
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
