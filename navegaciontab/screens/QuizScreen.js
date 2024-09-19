import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function QuizScreen() {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
  });

  const handleAnswerChange = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
  };

  const handleSubmit = () => {
    alert(`Tus respuestas:\n1. ${answers.question1}\n2. ${answers.question2}\n3. ${answers.question3}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cuestionario sobre Cristiano Ronaldo y el Real Madrid</Text>

      {/* Pregunta 1 */}
      <Text style={styles.question}>1. ¿En qué año se unió Cristiano Ronaldo al Real Madrid?</Text>
      <RadioButton.Group
        onValueChange={(value) => handleAnswerChange('question1', value)}
        value={answers.question1}
      >
        <View style={styles.radioButton}>
          <RadioButton value="2007" />
          <Text>2007</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton value="2009" />
          <Text>2009</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton value="2010" />
          <Text>2010</Text>
        </View>
      </RadioButton.Group>

      {/* Pregunta 2 */}
      <Text style={styles.question}>2. ¿Cuántos Balones de Oro ganó Cristiano Ronaldo mientras jugaba en el Real Madrid?</Text>
      <RadioButton.Group
        onValueChange={(value) => handleAnswerChange('question2', value)}
        value={answers.question2}
      >
        <View style={styles.radioButton}>
          <RadioButton value="3" />
          <Text>3</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton value="4" />
          <Text>4</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton value="5" />
          <Text>5</Text>
        </View>
      </RadioButton.Group>

      {/* Pregunta 3 */}
      <Text style={styles.question}>3. ¿Cuántas Champions League ganó Cristiano con el Real Madrid?</Text>
      <RadioButton.Group
        onValueChange={(value) => handleAnswerChange('question3', value)}
        value={answers.question3}
      >
        <View style={styles.radioButton}>
          <RadioButton value="2" />
          <Text>2</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton value="3" />
          <Text>3</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton value="4" />
          <Text>4</Text>
        </View>
      </RadioButton.Group>

      {/* Botón para enviar respuestas */}
      <Button title="Enviar respuestas" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  question: {
    fontSize: 18,
    marginVertical: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});
