import { View, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";

import Header from "../components";
import { renderResponse, db } from "../components";
import { collection, getDocs } from "firebase/firestore";

const ResponsesPage = ({ route }) => {
  const { formId } = route.params;
  const [responseData, setResponseData] = useState();
  const [question, setQuestion] = useState();
  const allResponse = [];
  const allQuestion = [];

  useEffect(() => {
    const fetchResponses = async () => {
      const responseSnapshot = await getDocs(
        collection(db, `users/userId/form/${formId}/response`)
      );
      for (const responseDoc of responseSnapshot.docs) {
        allResponse.push({
          id: responseDoc.id,
          answer: responseDoc.data().answer,
          responder: responseDoc.data().userId,
        });
      }
      const itemSnapshot = await getDocs(
        collection(db, `users/userId/form/${formId}/item`)
      );
      for (const itemDoc of itemSnapshot.docs) {
        allQuestion.push({
          id: itemDoc.data().id,
          type: itemDoc.data().type,
          title: itemDoc.data().title,

          options:
            itemDoc.data().type !== "shortAnswer" ? itemDoc.data().options : {},
        });
      }
      setQuestion(allQuestion);
      setResponseData(allResponse);
    };
    fetchResponses();
  }, []);

  return (
    <View>
      {responseData && console.log(responseData.length)}
      <Header headerText={"hello"} />
      <FlatList
        data={question}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderResponse(item, responseData)}
      />
    </View>
  );
};

export default ResponsesPage;