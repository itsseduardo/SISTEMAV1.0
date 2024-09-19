import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ImageScreen from './screens/ImageScreen';
import OptionsScreen from './screens/OptionsScreen';
import QuizScreen from './screens/QuizScreen';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Images') {
              iconName = 'photo-library';
            } else if (route.name === 'Options') {
              iconName = 'settings';
            } else if (route.name === 'Quiz') {
              iconName = 'quiz';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          // Configuración del estilo de la barra de pestañas
          tabBarStyle: {
            paddingBottom: 10,   // Espacio interno en la parte inferior
            paddingTop: 10,      // Espacio interno en la parte superior
            height: 70,          // Altura de la barra
            justifyContent: 'space-around', // Distribuir los botones de forma uniforme
          },
          // Opciones para ajustar el estilo de las pestañas individuales
          tabBarItemStyle: {
            marginHorizontal: 10,  // Margen entre los botones
            padding: 5,            // Espaciado interno de cada botón
          },
        })}
      >
        <Tab.Screen name="Images" component={ImageScreen} />
        <Tab.Screen name="Options" component={OptionsScreen} />
        <Tab.Screen name="Quiz" component={QuizScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
