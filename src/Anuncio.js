// src/Anuncio.js

import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Anuncio = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navega a la siguiente pantalla después de 5 segundos
      navigation.navigate('Home'); // Cambia 'Home' por el nombre de tu pantalla principal
    }, 5000);

    // Limpia el timer si el componente se desmonta
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Bienvenido a nuestra aplicación!</Text>
      <Text style={styles.text}>Este es un anuncio que se cerrará en 5 segundos.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
});

export default Anuncio;
