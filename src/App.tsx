import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  // State buat nampung counternya
  let [counter, setCounter] = useState(0);

  // Function pas pencet aku dipencet
  let tambahCounter = () => {
    let newCounter = counter + 1;
    setCounter(newCounter);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
        }}
      >
        <Text>Counter: </Text>
        <Text>{counter}</Text>
      </View>

      <TouchableOpacity
        onPress={tambahCounter}
        style={{
          backgroundColor: '#ed1b2e',
          padding: 20,
          width: '85%',
          borderRadius: 12,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Pencet aku</Text>
      </TouchableOpacity>
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
});
