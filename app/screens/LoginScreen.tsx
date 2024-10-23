import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

const HomeScreen = () => {

  const handleProgramarRiego = () => {
    Alert.alert("Programar riego", "Aquí puedes programar los horarios de riego.");
  };

  const handleNotificaciones = () => {
    Alert.alert("Notificaciones", "Estado actual del riego y notificaciones.");
  };

  const handlePerfiles = () => {
    Alert.alert("Perfiles", "Gestión de perfiles de usuario.");
  };

  const handleAlertas = () => {
    Alert.alert("Alertas", "Manejo de alertas sobre fallos del sistema.");
  };

  return (
    <View style={styles.container}>
      <Image source={require('./logo.png')} style={styles.logo} />
      <Text style={styles.title}>Sistema de Riego Automatizado ADL</Text>
      <Text style={styles.subtitle}>Gestiona eficientemente tu sistema de riego</Text>
      
      <TouchableOpacity style={styles.buttonProgramar} onPress={handleProgramarRiego}>
        <Text style={styles.buttonText}>Programar Riego</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonNotificaciones} onPress={handleNotificaciones}>
        <Text style={styles.buttonText}>Estado y Notificaciones</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonPerfiles} onPress={handlePerfiles}>
        <Text style={styles.buttonText}>Gestión de Perfiles</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonAlertas} onPress={handleAlertas}>
        <Text style={styles.buttonText}>Alertas de Fallas</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(240, 240, 237)',  // Gris claro/blanco
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgb(18, 89, 48)',  // Verde oscuro
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
    color: 'rgb(87, 131, 103)',  // Verde apagado
  },
  buttonProgramar: {
    backgroundColor: 'rgb(114, 162, 66)',  // Verde brillante
    padding: 15,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonNotificaciones: {
    backgroundColor: 'rgb(31, 122, 201)',  // Azul
    padding: 15,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonPerfiles: {
    backgroundColor: 'rgb(87, 131, 103)',  // Verde apagado
    padding: 15,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonAlertas: {
    backgroundColor: 'rgb(167, 201, 177)',  // Verde pálido
    padding: 15,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HomeScreen;