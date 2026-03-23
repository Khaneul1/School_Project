import 'react-native-gesture-handler'; 
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import SignupScreen from './src/screens/User/SignupScreen.js';
import LoginScreen from './src/screens/User/LoginScreen.js';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/screens/Main/MainScreen.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen name="main" component={MainScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
