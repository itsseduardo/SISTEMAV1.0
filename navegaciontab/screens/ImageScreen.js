import React from 'react';
import { ScrollView, Image, StyleSheet, View } from 'react-native';

export default function ImageScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://e00-us-marca.uecdn.es/assets/multimedia/imagenes/2024/08/12/17234724991629.jpg' }} 
          style={styles.image} 
        />
        <Image 
          source={{ uri: 'https://jgbasket.net/wp-content/uploads/2021/11/Curry.jpg' }} 
          style={styles.image} 
        />
        <Image 
          source={{ uri: 'https://media.admagazine.com/photos/638e25bb9a9048f82856c0c7/16:9/w_2560%2Cc_limit/GettyImages-1443064180.jpg' }} 
          style={styles.image} 
        />
        <Image 
          source={{ uri: 'https://choco7dias.com/wp-content/uploads/2020/12/quibdo-malecon-esclinatas-colores-choco.jpg' }} 
          style={styles.image} 
        />
        <Image 
          source={{ uri: 'https://estaticos.elcolombiano.com/binrepository/1200x800/0c0/0d0/none/11101/KJLI/whatsapp-image-2024-06-01-at-4-41-31-pm_45254739_20240601170959.jpg' }} 
          style={styles.image} 
        />
        <Image 
          source={{ uri: 'https://intn24.lalr.co/cms/2024/05/02152434/Seleccion-Colombia-29.jpg' }} 
          style={styles.image} 
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
});
