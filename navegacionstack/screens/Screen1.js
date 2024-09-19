import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Pantalla 1</Text>
      {/*boton para poderme cambiar de pantalla y así mismmo en todas las screens*/}
      <Button
      title="Ir a Pantalla 2 (con parámetro)"
      onPress={() => navigation.navigate('Screen2', { shouldNavigateToScreen3: true })}  // Enviar parámetro
      
      
      /*title="Reemplazar con Pantalla 2"
       onPress={() => navigation.replace('Screen2', { message: 'Te mandaron de la 1!' })}  // Usamos replace en lugar de navigate */


         /* title="Ir a Pantalla 2 con mensaje"
         onPress={() => navigation.navigate('Screen2', { message: 'Te mandaron de la 1!' })} */
        
        /* title="Ir a Pantalla 2"
        onPress={() => navigation.navigate('Screen2')} // el navigation.navigate */
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
