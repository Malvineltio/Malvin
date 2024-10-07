import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Anuncio from './src/Anuncio';
import Home from './src/Home'; // Asegúrate de crear una pantalla principal llamada Home

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Anuncio" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Anuncio" component={Anuncio} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;