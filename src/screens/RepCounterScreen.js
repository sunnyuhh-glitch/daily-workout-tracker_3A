import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function RepCounterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>
        CURRENT EXERCISE
      </Text>

      <Text style={styles.title}>
        Push-ups
      </Text>

      <Text style={styles.reps}>
        10 Reps
      </Text>

      <Text style={styles.subtitle}>
        Rep counter interaction will be added later.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('WorkoutSummary')
        }
      >
        <Text style={styles.buttonText}>
          Finish Workout
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

  smallText: {
    color: '#5B5FEF',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1D2A3A',
    marginTop: 8,
  },

  reps: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#5B5FEF',
    marginTop: 25,
  },

  subtitle: {
    color: '#7A8494',
    marginTop: 10,
    marginBottom: 35,
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
    fontWeight: 'bold',
  },
});