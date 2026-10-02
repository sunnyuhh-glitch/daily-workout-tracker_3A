import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function WorkoutSummaryScreen({
  navigation,
  route,
}) {
  const {
    workoutName = 'Workout',
    totalExercises = 0,
    totalSets = 0,
    totalReps = 0,
  } = route.params || {};

  const goHome = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'MainTabs',
          params: {
            screen: 'Home',
          },
        },
      ],
    });
  };

  return (
    <SafeAreaView
      style={styles.container}
      edges={['bottom']}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="#5B5FEF"
      />

      <View style={styles.content}>
        {/* Success */}
        <View style={styles.successSection}>
          <View style={styles.successCircle}>
            <Text style={styles.successIcon}>
              ✓
            </Text>
          </View>

          <Text style={styles.title}>
            Workout Complete!
          </Text>

          <Text style={styles.subtitle}>
            Great job! You finished your workout.
          </Text>
        </View>

        {/* Workout Name */}
        <View style={styles.nameCard}>
          <Text style={styles.nameLabel}>
            WORKOUT
          </Text>

          <Text style={styles.workoutName}>
            {workoutName}
          </Text>
        </View>

        {/* Stats */}
        <Text style={styles.sectionTitle}>
          Workout Summary
        </Text>

        <View style={styles.statsCard}>
          <View style={styles.statItem}>
            <View style={styles.statIcon}>
              <Text style={styles.statEmoji}>
                🏋️
              </Text>
            </View>

            <Text style={styles.statNumber}>
              {totalExercises}
            </Text>

            <Text style={styles.statLabel}>
              Exercises
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.statItem}>
            <View style={styles.statIcon}>
              <Text style={styles.statEmoji}>
                ✓
              </Text>
            </View>

            <Text style={styles.statNumber}>
              {totalSets}
            </Text>

            <Text style={styles.statLabel}>
              Sets
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.statItem}>
            <View style={styles.statIcon}>
              <Text style={styles.statEmoji}>
                🔥
              </Text>
            </View>

            <Text style={styles.statNumber}>
              {totalReps}
            </Text>

            <Text style={styles.statLabel}>
              Reps
            </Text>
          </View>
        </View>

        {/* Message */}
        <View style={styles.messageCard}>
          <Text style={styles.messageEmoji}>
            🎉
          </Text>

          <View style={styles.messageContent}>
            <Text style={styles.messageTitle}>
              Nice work!
            </Text>

            <Text style={styles.messageText}>
              Every completed workout is another
              step toward your fitness goals.
            </Text>
          </View>
        </View>

        <View style={styles.spacer} />

        {/* Home Button */}
        <TouchableOpacity
          style={styles.homeButton}
          onPress={goHome}
          activeOpacity={0.8}
        >
          <Text style={styles.homeButtonText}>
            Back to Home
          </Text>

          <Text style={styles.homeArrow}>
            →
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 20,
  },

  successSection: {
    alignItems: 'center',
    marginBottom: 30,
  },

  successCircle: {
    width: 75,
    height: 75,
    borderRadius: 38,
    backgroundColor: '#5B5FEF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 17,
  },

  successIcon: {
    color: '#FFFFFF',
    fontSize: 35,
    fontWeight: 'bold',
  },

  title: {
    color: '#1D2A3A',
    fontSize: 27,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#7A8494',
    fontSize: 12,
    marginTop: 6,
  },

  nameCard: {
    backgroundColor: '#EEEEFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 25,
  },

  nameLabel: {
    color: '#777BEF',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1.3,
  },

  workoutName: {
    color: '#34389A',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 4,
  },

  sectionTitle: {
    color: '#1D2A3A',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  statsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 22,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  statItem: {
    flex: 1,
    alignItems: 'center',
  },

  statIcon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#F0F0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },

  statEmoji: {
    fontSize: 16,
  },

  statNumber: {
    color: '#1D2A3A',
    fontSize: 24,
    fontWeight: 'bold',
  },

  statLabel: {
    color: '#8D96A5',
    fontSize: 9,
    marginTop: 3,
  },

  divider: {
    width: 1,
    height: 55,
    backgroundColor: '#E7E9EE',
  },

  messageCard: {
    backgroundColor: '#FFF8E6',
    borderRadius: 16,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  messageEmoji: {
    fontSize: 27,
    marginRight: 12,
  },

  messageContent: {
    flex: 1,
  },

  messageTitle: {
    color: '#756126',
    fontSize: 12,
    fontWeight: 'bold',
  },

  messageText: {
    color: '#8D7B4B',
    fontSize: 10,
    lineHeight: 15,
    marginTop: 3,
  },

  spacer: {
    flex: 1,
  },

  homeButton: {
    minHeight: 53,
    backgroundColor: '#5B5FEF',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  homeButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },

  homeArrow: {
    color: '#FFFFFF',
    fontSize: 19,
    marginLeft: 9,
  },
});