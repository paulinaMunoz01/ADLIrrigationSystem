import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Para usar íconos de menú y perfil

// Definición de las props del componente
interface ProgramarRiegoProps {
  navigation: any; // Cambia 'any' por el tipo correcto de navegación si lo conoces
}

const ProgramarRiego: React.FC<ProgramarRiegoProps> = ({ navigation }) => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [zone, setZone] = useState<string>('');

  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  const times = [
    '6:00 a.m - 7:00 a.m',
    '7:00 a.m - 8:00 a.m',
    '8:00 a.m - 9:00 a.m',
    '9:00 a.m - 10:00 a.m',
    '4:00 p.m - 5:00 p.m',
    '6:00 p.m - 7:00 p.m',
    '7:00 a.m - 8:00 p.m',
  ];

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((item) => item !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleSubmit = () => {
    if (selectedDays.length === 0) {
      Alert.alert('Error', 'Por favor, selecciona al menos un día.');
      return;
    }

    if (!selectedTime) {
      Alert.alert('Error', 'Por favor, selecciona una hora de riego.');
      return;
    }

    if (!zone) {
      Alert.alert('Error', 'Por favor, ingresa una zona.');
      return;
    }

    const formData = {
      days: selectedDays,
      time: selectedTime,
      zone,
    };

    Alert.alert('Datos Enviados', `Días: ${selectedDays.join(', ')}\nHora: ${selectedTime}\nZona: ${zone}`);
  };

  return (
    <View style={styles.container}>
      {/* Barra de navegación */}
      <View style={styles.header}>
        <Ionicons name="menu" size={28} color="#FFF" onPress={() => Alert.alert('Menú')} />
        <Text style={styles.headerText}></Text>
        <Ionicons name="person-circle-outline" size={28} color="#FFF" onPress={() => Alert.alert('Perfil')} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>PROGRAMAR RIEGO</Text>

        {/* Días que durará el riego */}
        <Text style={styles.subtitle}>Días Que Durará El Riego</Text>
        {days.map((day) => (
          <TouchableOpacity
            key={day}
            style={styles.optionContainer}
            onPress={() => toggleDay(day)}
          >
            <View style={[styles.radioButton, selectedDays.includes(day) && styles.radioSelected]} />
            <Text style={styles.optionText}>{day}</Text>
          </TouchableOpacity>
        ))}

        {/* Tiempo estimado de riego */}
        <Text style={styles.subtitle}>Tiempo Estimado De Riego</Text>
        {times.map((time, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionContainer}
            onPress={() => setSelectedTime(time)}
          >
            <View style={[styles.radioButton, selectedTime === time && styles.radioSelected]} />
            <Text style={styles.optionText}>{time}</Text>
          </TouchableOpacity>
        ))}

        {/* Zona */}
        <Text style={styles.subtitle}>Zona</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Ingresa la zona"
          value={zone}
          onChangeText={setZone}
        />

        {/* Botones de acción */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.discardButton} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>DESCARTAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>GUARDAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0ED',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#A7C9B1',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#060606',
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#060606',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#060606',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#4CAF50',
    paddingBottom: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#A7C9B1',
    marginRight: 15,
  },
  radioSelected: {
    backgroundColor: '#A7C9B1',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  discardButton: {
    backgroundColor: '#F44336',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  saveButton: {
    backgroundColor: '#A7C9B1',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProgramarRiego;