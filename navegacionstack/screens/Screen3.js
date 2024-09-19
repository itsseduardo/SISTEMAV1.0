import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Screen3({ navigation, route }) {
    
    const infoFromScreen2 = route.params?.info;

  return (
    <View style={styles.container}>
      <Text>Pantalla 3</Text>
      <Text>{infoFromScreen2}</Text>
      <Button
        title="Volver"
        onPress={() => navigation.goBack()}
        
       /* title="Volver a Pantalla 1"
        onPress={() => navigation.navigate('Screen1')} */
      />
       <Button
                title="Reiniciar y volver a Pantalla 1"
                onPress={() => navigation.reset({
                    index: 0,
                    routes: [{ name: 'Screen1' }]
                })}
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
