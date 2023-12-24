import React from "react";
import { ScrollView, StyleSheet, SafeAreaView } from "react-native";

import { Cards } from "../../components";

const CardContainer = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollview}
    >
      <Cards
        title={"SOAL SELIDIK MENGENAI PENBANGUNAN BERSEPADU NEGARA"}
        desc={
          "Suvey ini mengandungi 3 bahagian iaitu bahagian A, B dan C mengenai demografi responden dan minat terhadap majalah yang berkaitan dengan XXXL"
        }
        qNum={50}
        category={"Psychology"}
      />
      <Cards
        title={"SOAL SELIDIK MENGENAI PENBANGUNAN BERSEPADU NEGARA"}
        desc={"Suvey ini majalah yang berkaitan dengan XXXL"}
        qNum={30}
        category={"Psychology"}
      />
      <Cards
        title={"SOAL SELIDIK MENGENAI PENBANGUNAN BERSEPADU NEGARA"}
        desc={"Suvey ini majalah yang berkaitan dengan XXXL"}
        qNum={12}
        category={"Health"}
      />
      <Cards
        title={"SOAL SELIDIK ADAT RESAM ETNIK DARI PELBAGAI KAUM DI MALAYSIA"}
        desc={"Suvey ini majalah yang berkaitan dengan XXXL"}
        qNum={5}
        category={"Sport"}
      />
      <Cards
        title={"DIGITAL SAFETY CAMPAIGN"}
        desc={"Suvey ini majalah yang berkaitan dengan XXXL"}
        qNum={7}
        category={"Education"}
      />
      <Cards
        title={"DIGITAL SAFETY CAMPAIGN"}
        desc={"Suvey ini majalah yang berkaitan dengan XXXL"}
        qNum={20}
        category={"Technology"}
      />
    </ScrollView>
  );
};
export default CardContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview: {
    gap: 20,
    alignItems: "center",
    paddingVertical: 20,
  },
});
