import axios from "axios";
import { useState, useEffect } from "react";
import { SafeAreaView, Text, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import NewsItem from "../../components/NewsItem/NewsItem";
import { News } from "../../types"
import styles from "./NewsListScreen.styles";

const NewsListScreen = () => {
  const [data, setData] = useState<News[]>([]);
  const [loading, isLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [lastPage, setLastPage] = useState(false);

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
      
      const { data: { messages } } = await axios.get(`https://afreactrecrutation.azurewebsites.net/api/Messages?page=${offset}`, config);
     
      setOffset(offset + 1)
      setData([...data, ...messages]);

      messages.length < 4 ? setLastPage(true) : setLastPage(false);

      isLoading(false);

    } catch (err) {
      console.log(`[ getData ] - ${err}`);
    }
  }

  const FooterItemLoader = () => (
    <TouchableOpacity onPress={getData}>
      {loading && <ActivityIndicator />}
      {!lastPage && offset > 0 && <Text style={styles.listFooter}>Załaduj więcej...</Text>}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        rowGap="10px"
        keyExtractor={(item) => item.createDate}
        renderItem={({ item }) => <NewsItem {...item} />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={FooterItemLoader}
      />

    </SafeAreaView>
  )
}

export default NewsListScreen;