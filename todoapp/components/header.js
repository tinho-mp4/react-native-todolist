import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>MY TODO LIST</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,

    paddingTop: 50,
    backgroundColor: '#BC7745',
  },
  title: {
    fontFamily: 'tahoma',
    textAlign: 'center',
    color: '#F7F7FF',
    fontSize: 20,
    fontWeight: 'bold',
  }
});