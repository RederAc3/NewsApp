import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from "@react-native-async-storage/async-storage";

import NewsDetails from "./src/screens/NewsDetailsScreen/NewsDetailsScreen";
import NewsListScreen from "./src/screens/NewsListScreen/NewsListScreen";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import LoadingScreen from "./src/screens/LoadingScreen/LoadingScreen";

const Stack = createNativeStackNavigator();

const Root = () => {
  const [isAuthenticate, setAuthenticate] = useState(false)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setTimeout(async () => {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        setAuthenticate(!!token);
        setLoading(false);
      } else {
        setAuthenticate(false);
        setLoading(false);
      }

    }, 500)
  }, [])

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator>
        {
          !loading ? (

          !isAuthenticate ? (
            <>
              <Stack.Screen name="Login" component={LoginScreen} options={{ gestureEnabled: false, animationTypeForReplace: 'push' }}/>
              <Stack.Screen name="News" component={NewsListScreen} options={{ gestureEnabled: false, headerBackVisible: false }}/>
              <Stack.Screen name="Details" component={NewsDetails} />
            </>
          ) : (
            <>
              <Stack.Screen name="News" component={NewsListScreen} />
              <Stack.Screen name="Details" component={NewsDetails} />
              <Stack.Screen name="Login" component={LoginScreen} />
            </>
          )
          ) : <Stack.Screen name="Loading" component={LoadingScreen} options={{ animationTypeForReplace: 'pop' }} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Root;