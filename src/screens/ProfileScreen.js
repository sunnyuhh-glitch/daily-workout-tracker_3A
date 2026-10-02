import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>👤</Text>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.subtitle}>
        Your workout profile will appear here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontSize: 50,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#1D2A3A',
  },

  subtitle: {
    color: '#7A8494',
    marginTop: 8,
  },
});