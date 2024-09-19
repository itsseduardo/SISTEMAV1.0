# 🚀 Taller de Navegación en Stack - React Native

Este taller tiene como objetivo enseñar los conceptos y prácticas de la navegación en pila utilizando `StackNavigator` en React Native.

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- npm (se instala junto con Node.js)
- React Native CLI o Expo CLI (dependiendo de tu preferencia)

---

## ⚙️ Instalación del Proyecto
Si desean crear un proyecto de 0 y no usar este de base. Deben instalar estos paquetes para navegar entre ventanas ya que esto no esta instalado por defecto
- npm install @react-navigation/native
- npm install react-native-screens react-native-safe-area-context
- npm install @react-navigation/stack
- npm install @react-navigation/drawer
- npm install @react-navigation/bottom-tabs

## 📚 Taller Parte 1: Navegación en Stack

En esta parte del taller, vamos a practicar los conceptos clave de la navegación en stack. A continuación, se presentan los puntos para trabajar:

### 1. Crear un `StackNavigator` básico con tres pantallas (`Screen1`, `Screen2`, `Screen3`)
   - **Objetivo**: Configurar la estructura básica de un `StackNavigator`.
   - **Tarea**: Se debe crear tres pantallas (`Screen1`, `Screen2`, `Screen3`) y configurar la navegación entre ellas usando `navigation.navigate()`.

---

### 2. Implementar navegación hacia adelante usando `navigation.navigate()`
   - **Objetivo**: Aprender a usar `navigation.navigate()` para moverse entre pantallas.
   - **Tarea**: Se debe agregar botones en cada pantalla para navegar a la siguiente pantalla.

---

### 3. Implementar navegación hacia atrás usando `navigation.goBack()`
   - **Objetivo**: Aprender a regresar a la pantalla anterior usando `navigation.goBack()`.
   - **Tarea**: Se debe agregar un botón que permita regresar a la pantalla anterior en la pila.

---

### 4. Navegación con parámetros (`navigation.navigate` y `route.params`)
   - **Objetivo**: Pasar datos entre pantallas usando `navigation.navigate()` y recuperarlos con `route.params`.
   - **Tarea**: Se debe pasar un parámetro de `Screen1` a `Screen2` y mostrarlo, luego pasar otro de `Screen2` a `Screen3`.

---

### 5. Implementar `navigation.replace()`
   - **Objetivo**: Mostrar cómo reemplazar una pantalla en la pila usando `navigation.replace()`.
   - **Tarea**: Se debe reemplazar la pantalla actual sin agregar una nueva a la pila.

---



### 6. Implementar `navigation.reset()` para restablecer la pila de navegación
   - **Objetivo**: Aprender a restablecer la pila de navegación eliminando el historial con `reset()`.
   - **Tarea**: Se debe implementar un botón en `Screen3` que reinicie la pila y lleve al usuario de vuelta a `Screen1`.

---

### 7. Implementar navegación condicional basada en parámetros
   - **Objetivo**: Controlar la navegación condicionalmente según los parámetros pasados entre pantallas.
   - **Tarea**: Se debe crear un flujo en el que, dependiendo de un parámetro pasado, se redirija al usuario a una pantalla diferente o se muestre un mensaje.

## **Taller Parte 2: Configuración de un TabNavigator con Funcionalidad Extensiva**

---

### **1. Configurar un `BottomTabNavigator` con tres pantallas**
   - **Objetivo**: Configurar la navegación básica por pestañas con tres pantallas.
   - **Justificación**: Es fundamental aprender cómo estructurar la navegación con pestañas para organizar diferentes secciones de una aplicación.
   - **Tarea**: Se deben crear tres pantallas (`ImageScreen`, `OptionsScreen`, `QuizScreen`) y configurarlas en el `BottomTabNavigator`.

---

### **2. Agregar un `ScrollView` en la pantalla de imágenes**
   - **Objetivo**: Implementar un `ScrollView` en una de las pestañas para mostrar contenido desplazable.
   - **Justificación**: En muchas aplicaciones, el contenido es mayor que el espacio disponible en la pantalla, por lo que un `ScrollView` es esencial para mostrar contenido como imágenes, textos, o listas largas.
   - **Tarea**: En la pantalla `ImageScreen`, se debe agregar un `ScrollView` que contenga 6 imágenes. Las imágenes pueden ser locales o desde una URL, y deben estar organizadas de manera que el usuario pueda desplazarse verticalmente para verlas.

---

### **3. Mostrar una lista de opciones en la pantalla de opciones**
   - **Objetivo**: Implementar una lista de opciones en la pestaña "Options".
   - **Justificación**: Las listas de opciones son comunes en aplicaciones de configuraciones o preferencias del usuario, y aprender a manejarlas es clave.
   - **Tarea**: En la pantalla `OptionsScreen`, se debe mostrar una lista de opciones usando un componente como `FlatList` o `SectionList`, con al menos 5-6 opciones ficticias que representen configuraciones o elementos seleccionables.

---

### **4. Crear un cuestionario en la pantalla de cuestionario**
   - **Objetivo**: Implementar una interfaz de usuario que permita a los usuarios responder a un cuestionario simple.
   - **Justificación**: Los cuestionarios o encuestas son elementos interactivos comunes en muchas aplicaciones. Este ejercicio ayudará a los estudiantes a trabajar con campos de entrada y formularios.
   - **Tarea**: En la pantalla `QuizScreen`, se debe crear un cuestionario con al menos 3 preguntas de selección múltiple. Las preguntas deben estar formadas por un `TextInput` para las respuestas o con botones de selección (radio buttons).

---

### **5. Agregar iconos a las pestañas del `BottomTabNavigator`**
   - **Objetivo**: Mejorar la experiencia de usuario al agregar iconos a cada pestaña del TabNavigator.
   - **Justificación**: Los iconos ayudan a que la navegación sea más intuitiva, haciendo que el usuario pueda reconocer rápidamente la funcionalidad de cada pestaña.
   - **Tarea**: Se debe buscar cómo agregar iconos a las pestañas utilizando un paquete como `react-native-vector-icons`. Los estudiantes deben agregar un icono apropiado para cada pantalla: imágenes, opciones y cuestionario.

---

### **6. Configurar el espacio entre los botones del TabNavigator**
   - **Objetivo**: Personalizar la distancia y el espaciado entre los botones del TabNavigator para mejorar la disposición visual.
   - **Justificación**: Ajustar la disposición de los botones del TabNavigator es útil para garantizar que los elementos estén bien distribuidos y sean accesibles.
   - **Tarea**: Se debe buscar cómo ajustar el espacio entre los botones del TabNavigator, configurando el `tabBarOptions` para modificar las propiedades de espaciado o márgenes entre las pestañas.


