import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [number, setNumber] = useState('');

  console.log(number);

  var resultado = number;
  for(var i = 1; i < number; i++){
    resultado *= i;
  }
  console.log(resultado);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.h1}>APP-FATORIAL</Text>
      </View>
      <View>
        
        <Text style={styles.size}>Informe um número: </Text>
        <TextInput 
            style={styles.size}
            placeholder="Ex: 5."
            KeyBoardType="numeric"
            onChangeText={setNumber} 
            value={number}>
        </TextInput>
        <Text>#####################</Text>
        <Text style={styles.size}>Numero inserido: {number}</Text>
        <Text style={styles.size}>Fatorial: {resultado}</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  h1: {
    color: 'red',
    textAlign: 'center',
    fontSize: 20,
  },
  size: {
    fontSize: 20
  }
  

});
