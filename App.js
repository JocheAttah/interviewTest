import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Cart, Home } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"home"}
        >
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
