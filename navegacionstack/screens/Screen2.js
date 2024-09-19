import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Screen2({ navigation, route }) {

    const shouldNavigateToScreen3 = route.params?.shouldNavigateToScreen3;

    /*const messageFromScreen1 = route.params?.message;*/

    useEffect(() => {
        // Condicional para decidir si navegar a Screen3 o mostrar un mensaje
        if (shouldNavigateToScreen3) {
          navigation.navigate('Screen3', { info: 'Llegaste desde la Pantalla 2' });
        }
      }, [shouldNavigateToScreen3]);
    

  return (
    <View style={styles.container}>
      <Text>Pantalla 2</Text>
      <Text>{messageFromScreen1}</Text>
      <Button
        title="Reemplazar con Pantalla 3"
        onPress={() => navigation.replace('Screen3', { info: 'Y aca desde la 2!' })}  // Usamos replace en lugar de navigate
       
       
       /* title="Ir a Pantalla 3 con información"
        onPress={() => navigation.navigate('Screen3', { info: 'Y  aca desde la 2!' })} /*
       
       /* title="Ir a Pantalla 3"
        onPress={() => navigation.navigate('Screen3')}*/
      />
       {/* Botón para devolverme a la Pantalla anterior */}
       <Button
        title="Volver"
        onPress={() => navigation.goBack()} 
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
