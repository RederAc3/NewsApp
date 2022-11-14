import axios from "axios";
import { useState, useEffect } from "react";
import { SafeAreaView, Text, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./NewsListScreen.styles";

const NewsList = () => {
  const [data, setData] = useState([])
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    
    const token = await AsyncStorage.getItem('token');

    let config = {
      headers: {
        accept: "application/json",
        ContentType: "application/json",
        Authorization: `Bearer ${token}`
      }
    };

    try {
      isLoading(true)
      const { data: { messages } } = await axios.get(`https://afreactrecrutation.azurewebsites.net/api/Messages?page=0`, config);
      setData([ ...messages]);
      isLoading(false)

    } catch (err) {
      console.log(`[ getData ] - ${err}`);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        showsVerticalScrollIndicator={false}
      />

    </SafeAreaView>
  )
}

export default NewsList;