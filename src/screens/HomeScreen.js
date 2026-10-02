import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🏋️</Text>

      <Text style={styles.title}>
        Daily Workout Tracker
      </Text>

      <Text style={styles.subtitle}>
        Track your exercises, sets, and reps.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('StartWorkout')}
      >
        <Text style={styles.buttonText}>
          Start Workout
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

  emoji: {
    fontSize: 60,
    marginBottom: 15,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1D2A3A',
  },

  subtitle: {
    fontSize: 14,
    color: '#7A8494',
    marginTop: 8,
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#5B5FEF',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 14,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});