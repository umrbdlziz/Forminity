import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import globalStyle from "../App/general.style";


import { Header,PointCard } from "../components";
import { FONT, COLORS } from "../constants";

const PointPage = () => {
  const [refreshing, setRefreshing] = useState(false)
  const uid = useSelector((state) => state.uid.value);
  const userData = useSelector((state) => state.userData);

  return (
    <View>
      <Header headerText={"POINT"} />

    <View style={[styles.border, globalStyle.shadow]}>
        <Text style={styles.text}>Points Balance: </Text>
        <Text style={styles.pointstyle}>{userData.point}</Text>
    </View>
<PointCard point={50} mycsd={1}></PointCard>
<PointCard point={100} mycsd={2}></PointCard>   
<PointCard point={150} mycsd={3}></PointCard>   

    </View>
  );
};
export default PointPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  pointstyle: {
    fontSize: 14,
    paddingLeft: 3,
  },
  text: {
    fontFamily: FONT.text,
    fontSize: 14,
  },
  border: {
    alignItems: "left",
    backgroundColor: COLORS.background,
    borderRadius: 100,
    padding: 10,
    display: 'flex',
    flexDirection: "row",
    marginRight: 200,
    marginLeft: 10,
    paddingLeft: 20,
  },

});