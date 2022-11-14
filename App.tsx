import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsListScreen from "./src/screens/NewsListScreen/NewsListScreen";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";

const Stack = createNativeStackNavigator();
const auth = false

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          !auth ? (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="News" component={NewsListScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="News" component={NewsListScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Root;