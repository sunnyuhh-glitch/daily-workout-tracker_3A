import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function StartWorkoutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🔥</Text>

      <Text style={styles.title}>
        Start Workout
      </Text>

      <Text style={styles.subtitle}>
        Select your exercises and begin your session.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RepCounter')}
      >
        <Text style={styles.buttonText}>
          Begin Exercise
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  icon: {
    fontSize: 55,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1D2A3A',
    marginTop: 15,
  },

  subtitle: {
    color: '#7A8494',
    marginTop: 8,
    marginBottom: 30,
    textAlign: 'center',
  },

  button: {
    width: '100%',
    backgroundColor: '#5B5FEF',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  backButton: {
    marginTop: 15,
    padding: 12,
  },

  backText: {
    color: '#7A8494',
    fontWeight: '600',
  },
});