import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const options = [
  { id: '1', title: 'Notificaciones' },
  { id: '2', title: 'Privacidad' },
  { id: '3', title: 'Idioma' },
  { id: '4', title: 'Tema Oscuro' },
  { id: '5', title: 'Actualizaciones Automáticas' },
  { id: '6', title: 'Términos y Condiciones' },
];

export default function OptionsScreen() {
  // Función para renderizar cada opción
  const renderOption = ({ item }) => (
    <TouchableOpacity style={styles.optionContainer} onPress={() => alert(`Seleccionaste: ${item.title}`)}>
      <Text style={styles.optionText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opciones</Text>
      <FlatList
        data={options}
        renderItem={renderOption}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  optionContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 18,
  },
});
