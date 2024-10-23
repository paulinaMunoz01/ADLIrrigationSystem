import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';

const LoginScreen = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleLogin = () => {
    
    Alert.alert('Iniciando sesión...');
  };

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/LogoADL.jpeg')} style={styles.logo} />
      <Text style={styles.label}>USUARIO:</Text>
      <TextInput
        style={styles.input}
        placeholder="USUARIO"
        value={usuario}
        onChangeText={text => setUsuario(text)}
      />
      <Text style={styles.label}>CONTRASEÑA:</Text>
      <TextInput
        style={styles.input}
        placeholder="CONTRASEÑA"
        value={contrasena}
        onChangeText={text => setContrasena(text)}
        secureTextEntry
      />
      <TouchableOpacity onPress={() => Alert.alert('Recuperar contraseña')}>
        <Text style={styles.forgotPassword}>¿OLVIDASTE TU CONTRASEÑA?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    paddingHorizontal: 20,
  },
  logo: {
    width: 175,
    height: 175,
    marginBottom: 50,
    marginTop: 50,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 14,
    marginBottom: 5,
    color: '#125930',
  },
  input: {
    width: '100%',
    padding: 10,
    backgroundColor: '#A7C9B1',
    borderColor: '#ccc',
    color: '#125930',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  forgotPassword: {
    textAlign: 'left',
    color: '#72A242',
    fontSize: 12,
    marginVertical: 10,
    marginRight: 200,
  },
  button: {
    backgroundColor: '#1F7AC9',
    padding: 10,
    width: '45%',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginScreen