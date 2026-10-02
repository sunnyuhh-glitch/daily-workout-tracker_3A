import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function WorkoutSummaryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🎉</Text>

      <Text style={styles.title}>
        Workout Complete!
      </Text>

      <Text style={styles.subtitle}>
        Great job completing your workout.
      </Text>

      <View style={styles.summaryCard}>
        <View style={styles.stat}>
          <Text style={styles.number}>3</Text>
          <Text style={styles.label}>Sets</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.stat}>
          <Text style={styles.number}>30</Text>
          <Text style={styles.label}>Reps</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('MainTabs', {
            screen: 'Home',
          })
        }
      >
        <Text style={styles.buttonText}>
          Back to Home
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
    fontSize: 60,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1D2A3A',
    marginTop: 15,
  },

  subtitle: {
    color: '#7A8494',
    marginTop: 8,
  },

  summaryCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    flexDirection: 'row',
    marginVertical: 30,
    paddingVertical: 22,
  },

  stat: {
    flex: 1,
    alignItems: 'center',
  },

  number: {
    color: '#5B5FEF',
    fontSize: 25,
    fontWeight: 'bold',
  },

  label: {
    color: '#7A8494',
    marginTop: 5,
  },

  divider: {
    width: 1,
    backgroundColor: '#E2E5EA',
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